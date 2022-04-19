import './index.css'
import { Settings } from './settings'
import logo from '../../assets/logo (2).png'
import { AccountDetails } from './accountDetails'


export const NavBar = () =>{

    return(

        <div className="nav-container">
            <div>
                <img alt='My Fin' src={logo} className="logo" />
            </div>
            <div className='nav-info'>
                <AccountDetails />
                <Settings/>
            </div>
        </div>
    )
}