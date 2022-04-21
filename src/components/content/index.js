import { Route, Routes } from "react-router-dom"
import { Modals } from "../modals"

export const Content = () =>{
    return(
        <div style={{width: '100%', height: '100vh'}}>
            <Routes>
                <Route exact path="/" element={<Modals/>} />
            </Routes>
        </div>
    )
}