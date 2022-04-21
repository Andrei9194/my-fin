import { CostsModal } from "./costsModal"
import { RevenueModal } from "./revenueModal"

export const Modals = () =>{

    return(
        <div className="modal-container">
            <RevenueModal />
            <CostsModal />
        </div>
    )
}