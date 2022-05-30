import { useEffect, useState } from "react"
import { DATABASE_URL } from "../../firebase-config"

export const Costs = () =>{

    const [costs, setCosts] = useState()

    const fetchCosts = () =>{
        fetch(`${DATABASE_URL}/costs.json`)
        .then(r => r.json())
        .then(data =>{
            const formattedData = Object.keys(data).map(key => ({id: key, ...data[key]}))
            setCosts(formattedData)
        })
    }
    useEffect(()=>{
        fetchCosts()
    },[])

    const allCounts =(data)=>{
        if(data){
            return data.map(i => i.count)
        }
    } 
    const totalAmount = allCounts(costs)

    const reduceAmout =(allCounts) => {
        
        if(costs){
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
        <div>
        <h1>Costs</h1>
        <div className="info">
       <div className="tableArea">
       <table className='table'>
           <thead>
               <tr className="tableHeader">
               <td  className="lowlight"><div></div></td> 
                   <td>date</td>
                   <td>type cost</td>
                   <td>cost amount</td>
                   <td>a percentage of total cost</td>
                   <td  className="lowlight"><div></div></td> 
               </tr>
           </thead>
           <tbody className="tableBody">
                   
                       {
                           
                               costs && costs.map((cost) =>(      
                   <tr className="tableBody_field">    
                       <td className="highlight"><div className="highlight_div"></div></td>                 
                       <td className="tableBody_data">{cost.day}</td>
                       <td className="tableBody_data">{cost.note}</td>
                       <td className="tableBody_data">{cost.count} $</td>
                       <td className="tableBody_data">{share(cost.count, sum)}%</td>
                       <td className="highlight"><div className="highlight_div"></div></td>
                   </tr>   
                       ))}
                                            
           </tbody>
           <tfoot className="tableFooter">
               <td colSpan="3" >total revenue</td>
               <td colSpan='3' className="tableFooter_sum">{sum} $</td>
           </tfoot>
       </table>
       </div>
   </div>
   </div>
    )
}