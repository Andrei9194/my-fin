import { useEffect, useState } from "react";
import { DATABASE_URL } from "../../../firebase-config";
import './index.css'
export const RevenueRow = ({revenue}) =>{

    const [datas, setData] = useState()
    const [showTable, setShowTable] = useState(true)

    const handleShowTable = () =>{
        setShowTable(!showTable)
    }

    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const da = new Date()
    const numberMonth = da.getMonth()
    const currentMonth = monthName[numberMonth]

    useEffect(()=>{
        fetch(`${DATABASE_URL}/revenues/${currentMonth}.json`)
        .then(r=>r.json())
        .then(data => {
            const formattedData = Object.keys(data).map(key => ({id: key, ...data[key]}))
            setData(formattedData)
        })
    }, [])

    const allCounts =(data)=>{
        if(data){
            return data.map(i => i.count)
        }
    } 
    const totalAmount = allCounts(datas)
    console.log(totalAmount);

    const reduceAmout =(allCounts) => {
        
        if(datas){
            const allAmount = allCounts.reduce((prev, next)=> prev + next, 0)
            return allAmount
        }
    }

    const pro =(rev, totalRev) => {
        const total  = (rev * 100)/totalRev
        return total.toFixed(2)
    }
    const ad = reduceAmout(totalAmount)
    console.log(pro(totalAmount));

    return(
        <div className="info">
            <div className="titleArea">   
                <h1 className="title">{revenue.id}</h1>
                {
                    showTable ? <span className="titleButton" onClick={handleShowTable}>
                        -
                    </span>
                    :<span className="titleButton" onClick={handleShowTable}>
                            +
                    </span>
                }
                
            </div>
            <table className={showTable ? "table" : 'hidden'}>
                <thead>
                    <tr className="tableHeader">
                        <td>date</td>
                        <td>type revenue</td>
                        <td>revenue amount</td>
                        <td>a percentage of total revenue</td>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {datas && datas.map((i,index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{i.note}</td>
                            <td>{i.count}</td>
                            <td>{pro(i.count, ad)}%</td>
                        </tr>                            
                    ))}
                </tbody>
                <tfoot>
                    <td colSpan="2" style={{background: 'red'}}>total revenue</td>
                    <td>{ad}</td>
                </tfoot>
            </table>
        </div>
    )
}