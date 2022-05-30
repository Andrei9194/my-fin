import './index.css'
import { useEffect, useState } from "react"
import { Modals } from '../modals'
import { AttentionWindow } from '../attentionWindow'
import { DATABASE_URL } from '../../firebase-config'

export const MainPage = () =>{

    const [revenueData, setRevenuesData] = useState(null)
    const [costsData, setCostsData] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [modalName, setModalName] = useState()
    const [click, setClick] = useState(true)
    const [formData, setFormData] = useState({
        count: '',
        note: '',
    })

    
    const [overCount, setOverCount] = useState('')
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const today = new Date()
    const numberMonth = today.getMonth()
    const currentDay = String(today.getDate())
    const currentMonth = monthName[numberMonth]
    const currentYear = String(today.getFullYear())
    const currentDate = currentDay + ' ' + currentMonth; 

    const handleClose = () =>{
        setFormData({
            count: '',
            note: '',
        })
        setShowModal(false)
    }

    const addNewDatas= (method, month, data) =>{
        return fetch(`${DATABASE_URL}/${method}/${month}.json`,{
            method: "POST",
            body: JSON.stringify(data)
        })
    }

    const addNewRevenue = (e) =>{
        e.preventDefault()
        if(!formData.count.length){
            setClick(false)
        }else{
            addNewDatas('revenues', currentMonth, {...formData, count: Number(formData.count), day: currentDate})
            .then(()=>{
                handleClose()
            }).catch(()=>{
                console.error()
            })
        }
    }

    const addNewCost = (e) =>{
        if(!formData.count.length){
            setClick(false)
        } else{
            e.preventDefault()
            addNewDatas('costs', currentMonth, {...formData, count: -Math.abs(formData.count), day: currentDate})
            .then(()=>{
                handleClose()
            }).catch(()=>{
                console.error()
            })
        }
    }

    const showCostModal = () =>{
        setModalName('cost')
        setShowModal(true)
        setFormData({
            count: '',
            note: ''
        })
    }

    const showRevenueModal = () =>{
        setModalName('revenue')
        setShowModal(true)
        setFormData({
            count: '',
            note: ''
        })
    }

    const fetchRevenue = ()=>{
        fetch(`${DATABASE_URL}/revenues.json`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data).map(key => ({id: key, ...data[key]}))
            setRevenuesData(formattedData)
        })
        .catch(()=>{
            console.error('error');
        })
    }
    const fetchCosts = ()=>{
        // fetchData('costs')
        fetch(`${DATABASE_URL}/costs.json`)
        .then(r => r.json())
        .then(data =>{
            const formattedData = Object.keys(data).map(key => ({id: key, ...data[key]}))
            setCostsData(formattedData)
        })
        .catch(()=>{
            console.error('error')
        })
    }

    const totalAmout = (counts) =>{
        if(counts){
            return counts.map(i => i.count)
        }
    }
    
    const totalRevenues = totalAmout(revenueData)
    const totalCosts = totalAmout(costsData)

    useEffect(()=>{
        // fetchRevenue()
        // fetchCosts()
    },[])

    

    const reduceAmount = (rev, cost) =>{
        if(rev && cost){
            const total  = rev.concat(cost).reduce((rev, cost)=> rev + cost, 0)
           return setOverCount(total)
        } else if(rev && !cost){
           const total = rev.reduce((rev, cost)=> rev + cost, 0)
            return setOverCount(total)
        } else if(!rev && cost){
            const total = cost.reduce((cost, rev)=> cost + rev, 0)
            return setOverCount(total)
        }

    }

    return(
        <div>
            <div>
                <button onClick={showCostModal}>-</button>
              <div className='mainPage-count_area' style={{backgroundColor: (0 <= overCount) ? 'rgba(32, 209, 32, 0.55)' : 'rgba(255, 6, 6, 0.55)'}}>
                 <p>{overCount}</p>
              </div>
                <button onClick={showRevenueModal}>+</button>
            </div>
            <Modals showModal={showModal} setShowModal={setShowModal} 
            addCost={addNewCost}
            click={click} setClick={setClick}
            formData={formData} setFormData={setFormData} modalName={modalName} addRevenue={addNewRevenue} />
            <AttentionWindow count={overCount} />
        </div>
    )
}