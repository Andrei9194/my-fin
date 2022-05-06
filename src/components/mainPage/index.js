import './index.css'
import { useEffect, useState } from "react"
import { Modals } from '../modals'
import { AttentionWindow } from '../attentionWindow'
import { DATABASE_URL } from '../../firebase-config'

export const MainPage = () =>{

    const [datas, setDatas] = useState([]) 
    const [revenueData, setRevenuesData] = useState()
    const [showModal, setShowModal] = useState(false)
    const [modalName, setModalName] = useState('')
    const [click, setClick] = useState(true)
    const [formData, setFormData] = useState({
        count: '',
        note: '',
    })

    const addNewRevenue = (e) =>{
        e.preventDefault()
        if(!formData.count.length){
            setClick(false)
        }else{
            fetch(`${DATABASE_URL}/revenues.json`,{
                method: "POST",
                body: JSON.stringify(formData)
            }).then(()=>{
                setFormData({
                    count: '',
                    note: '',
                })
                setShowModal(false)
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
            setDatas([...datas, {...formData, count: 0 - formData.count ,id: Date.now()}])
            setFormData({
                count: '',
                note: '',
            })
            setShowModal(false)
        }
    }

    const showCostModal = () =>{
        setShowModal(true)
        setModalName('cost')
        setFormData({
            count: '',
            note: ''
        })
    }

    const showRevenueModal = () =>{
        setShowModal(true)
        setModalName('revenue')
        setFormData({
            count: '',
            note: ''
        })
    }

    const totalCount = datas.map(item => item.count)

    const reduceCount =  totalCount.reduce((result, points)=>{
      return Number(result) + Number(points)
    }, 0)
    console.log('reducer: ', reduceCount)

    const fetchRevenue = ()=>{
        fetch(`${DATABASE_URL}/revenues.json`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data).map(key => ({id: key, ...data[key]}))
            setRevenuesData(formattedData)
        })
    }
    const totalAmout = (counts) =>{
       return counts.map(i => i.count)
    }
    const totalRevenues = totalAmout(revenueData)
    // const totalCosts = totalAmout(costsData)

    const reduceAmount = (rev, cost) =>{
        const total  = rev.concat(cost).reduce((rev, cost)=> Number(rev) + Number(cost), 0)
        return total
    }
  

    useEffect(()=>{
        fetchRevenue()
    },[])

    console.log(revenueData)
    console.log(totalRevenues);
    // console.log(reduceRevenue)
    return(
        <div>
            <div>
                <button onClick={showCostModal}>-</button>
              <div className='mainPage-count_area' style={{backgroundColor: (0 <= reduceCount) ? 'rgba(32, 209, 32, 0.55)' : 'rgba(255, 6, 6, 0.55)'}}>
                  <p>0</p>
                  {/* <p>{totalCount(totalRevenues, totalCosts)}</p> */}
              </div>
                <button onClick={showRevenueModal}>+</button>
            </div>
            <Modals showModal={showModal} setShowModal={setShowModal} 
            addCost={addNewCost}
            click={click} setClick={setClick}
            formData={formData} setFormData={setFormData} modalName={modalName} addRevenue={addNewRevenue} />
            <AttentionWindow count={reduceCount} />
        </div>
    )
}