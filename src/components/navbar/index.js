import './index.css'
import { Settings } from './settings'
import logo from '../../assets/logo (2).png'
import { AccountDetails } from './accountDetails'
import { useState } from 'react'


export const NavBar = () =>{

    const [openSet, setOpenSet] = useState(false)
    const [openAccDet, setOpenAccDet] = useState(false)



    const handleShowSet = () =>{
        setOpenSet(!openSet)
        setOpenAccDet(false)
    }
    const handleShowAcc = () =>{
        setOpenAccDet(!openAccDet)
        setOpenSet(false)
    }


    return(

        <div className="nav-container">
            <div>
                <img alt='My Fin' src={logo} className="logo" />
            </div>
            <div className='nav-info'>
                <AccountDetails open={openAccDet} showModal={handleShowAcc}/>
                <Settings open={openSet} showModal={handleShowSet}/>
            </div>
        </div>
    )
}