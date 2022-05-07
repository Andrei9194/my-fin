import { Route, Routes } from "react-router-dom"
import { Costs } from "../costs"
import { MainPage } from "../mainPage"
import { Revenue } from "../revenue"

export const Content = () =>{
    return(
        <div style={{width: '100%', height: '100vh'}}>
            <Routes>
                <Route exact path="/" element={<MainPage/>} />
                <Route path="/revenue" element={<Revenue/>} />
                <Route path="/costs" element={<Costs/>}/>
            </Routes>
        </div>
    )
}