import { useEffect, useState } from "react"
import { DATABASE_URL } from "../../firebase-config"
import { CostRow } from "./costRow"

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

    return(
        <div>
            <h1>Costs</h1>
            {
            costs && costs.map((cost) =>(
                <CostRow cost={cost} key={cost.id} />
            ))
        }
        </div>
    )
}