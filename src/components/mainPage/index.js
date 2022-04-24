import './index.css'
import { useState } from "react"
import { Modals } from '../modals'

export const MainPage = () =>{

    const [datas, setDatas] = useState([]) 
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
            setDatas([...datas, {...formData, count: Number(formData.count),id: Date.now()}])
            setFormData({
                count: '',
                note: '',
            })
            setShowModal(false)
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

    return(
        <div>
            <div>
                <button onClick={showCostModal}>-</button>
              <div className='mainPage-count_area' style={{backgroundColor: (0 <= reduceCount) ? 'rgba(32, 209, 32, 0.55)' : 'rgba(255, 6, 6, 0.55)'}}>
                  <p>{reduceCount}</p>
              </div>
                <button onClick={showRevenueModal}>+</button>
            </div>
            <Modals showModal={showModal} setShowModal={setShowModal} 
            addCost={addNewCost}
            click={click} setClick={setClick}
            formData={formData} setFormData={setFormData} modalName={modalName} addRevenue={addNewRevenue} />
        </div>
    )
}