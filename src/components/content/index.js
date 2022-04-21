import { Route, Routes } from "react-router-dom"
import { MainPage } from "../mainPage"
import { Modals } from "../modals"

export const Content = () =>{
    return(
        <div style={{width: '100%', height: '100vh'}}>
            <Routes>
                <Route exact path="/" element={<MainPage/>} />
            </Routes>
        </div>
    )
}