import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react"
import { DATABASE_URL } from "../../firebase-config";
import { RevenueRow } from "./revenueRow";

export const Revenue = () =>{
    const [revenueDatas, setRevenuesDatas] = useState()

    const fetchRevenue =() =>{
        fetch(`${DATABASE_URL}/revenues.json`)
        .then(r=>r.json())
        .then(data => {
            const formattedData = Object.keys(data).map(key => ({id: key, ...data[key]}))
            setRevenuesDatas(formattedData)
        })
    }

    useEffect(()=>{
       fetchRevenue()
    }, [])

    console.log(revenueDatas)

    return(
        <div>
             <h1>Revenue</h1>
        {
            revenueDatas && revenueDatas.map((revenue) =>(
                <RevenueRow revenue={revenue} key={revenue.id} />
            ))
        }
        </div>
       
    )
}