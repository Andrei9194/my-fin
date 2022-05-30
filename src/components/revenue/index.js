import { useEffect, useState } from "react"
import { DATABASE_URL } from "../../firebase-config";
import './index.css'

export const Revenue = () =>{
    const [revenueDatas, setRevenuesDatas] = useState()

    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const today = new Date()
    const numberMonth = today.getMonth()
    const currentMonth = monthName[numberMonth]


    const fetchRevenue =() =>{
        fetch(`${DATABASE_URL}/revenues/${currentMonth}.json`)
        .then(r=>r.json())
        .then(data => {
            console.log(data);
            const formattedData = Object.keys(data).map(key => ({id:key.id, ...data[key]}))
            setRevenuesDatas(formattedData)
        })
    }
    
    useEffect(()=>{
       fetchRevenue()
    }, [])

    const allCounts =(data)=>{
        if(data){
            return data.map(i => i.count)
        }
    } 
    const totalAmount = allCounts(revenueDatas)

    const reduceAmout =(allCounts) => {
        
        if(revenueDatas){
            const allAmount = allCounts.reduce((prev, next)=> prev + next, 0)
            return allAmount
        }
    }

    const share =(rev, totalRev) => {
        const total  = (rev * 100)/totalRev
        return total.toFixed(2)
    }
    const sum = reduceAmout(totalAmount)


    return(
        <div className="revenueCosts-container">
             <h1 className="revenueCosts-title">Revenue</h1>
             <div className="info">
            <div className="tableArea">
            <table className='table'>
                <thead>
                    <tr className="tableHeader">
                    <td  className="lowlight"><div></div></td> 
                        <td>date</td>
                        <td>type revenue</td>
                        <td>revenue amount</td>
                        <td  className="lowlight"><div></div></td> 
                    </tr>
                </thead>
                <tbody className="tableBody">
                        
                            {
                                
                                    revenueDatas && revenueDatas.map((revenue) =>(      
                        <tr className="tableBody_field">    
                            <td className="highlight"><div className="highlight_div"></div></td>                 
                            <td className="tableBody_data">{revenue.day}</td>
                            <td className="tableBody_data">{revenue.note}</td>
                            <td className="tableBody_data">{revenue.count} $</td>
                            <td className="highlight"><div className="highlight_div"></div></td>
                        </tr>   
                            ))}
                                                 
                </tbody>
                <tfoot className="tableFooter">
                    <td colSpan="2" >total revenue</td>
                    <td colSpan='2' className="tableFooter_sum">{sum} $</td>
                </tfoot>
            </table>
            </div>
        </div>
        </div>
       
    )
}