import { Route, Routes } from "react-router-dom"
import { Modals } from "../modals"

export const Content = () =>{
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<Modals/>} />
            </Routes>
        </div>
    )
}