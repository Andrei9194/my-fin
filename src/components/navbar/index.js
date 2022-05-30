import './index.css'
import { Settings } from './settings'
import logo from '../../assets/logo (2).png'
import { AccountDetails } from './accountDetails'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


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
            <NavLink exact to='/'>
                <div className='nav-logo_area'>
                    <img alt='My Fin' src={logo} className="nav-logo" />
                </div>
            </NavLink>
            <div className='nav-info'>
                <AccountDetails open={openAccDet} showModal={handleShowAcc}/>
                <Settings open={openSet} showModal={handleShowSet}/>
            </div>
        </div>
    )
}