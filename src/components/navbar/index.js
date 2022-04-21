import './index.css'
import { Settings } from './settings'
import logo from '../../assets/logo (2).png'
import { AccountDetails } from './accountDetails'
import { NavLink } from 'react-router-dom'


export const NavBar = () =>{

    return(

        <div className="nav-container">
            <NavLink exact to='/'>
                <div className='nav-logo_area'>
                    <img alt='My Fin' src={logo} className="nav-logo" />
                </div>
            </NavLink>
            <div className='nav-info'>
                <AccountDetails />
                <Settings/>
            </div>
        </div>
    )
}