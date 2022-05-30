import './index.css'
import { useEffect, useState } from "react"

export const AttentionWindow =({count}) =>{

    const [alarmWin, setAlarmWin] = useState(false)
    useEffect(()=>{
        if(count < -999){
            const interval = setInterval(() =>{
                setAlarmWin((alarmWin) => !alarmWin)
            }, 1000);
            return()=>{
                clearInterval(interval)
            }
        } else{
            setAlarmWin(false)
        }
    }, [count])
    return(
        <div className={alarmWin ? "alarmWindow-content" : 'hidden'}>
            <h3>Attention you are very close to your limit</h3>
        </div>
    )
}