import { useState } from "react"
import { CostsModal } from "./costsModal"
import { RevenueModal } from "./revenueModal"
import './index.js'

export const Modals = () =>{
    const [costModal, setCostModal] = useState(false)
    const [revenueModal, setRevenueModal] = useState(false)

    const handlerCostModal = () =>{
        setCostModal(!costModal)
        setRevenueModal(false)
    }
    const handlerRevenueModal = () =>{
        setRevenueModal(!revenueModal)
        setCostModal(false)
    }
    return(
        <div className="modal-container">
            <button onClick={handlerCostModal}>-</button>
            <button onClick={handlerRevenueModal}>+</button>
            <CostsModal showModal={costModal} closeModal={setCostModal} />
            <RevenueModal showModal={revenueModal} closeModal={setRevenueModal}/>
        </div>
    )
}