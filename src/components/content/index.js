import { Route, Routes } from "react-router-dom"
import { MainPage } from "../mainPage"
import { Revenue } from "../revenue"

export const Content = () =>{
    return(
        <div style={{width: '100%', height: '100vh'}}>
            <Routes>
                <Route exact path="/" element={<MainPage/>} />
                <Route path="/revenue" element={<Revenue/>} />
            </Routes>
        </div>
    )
}