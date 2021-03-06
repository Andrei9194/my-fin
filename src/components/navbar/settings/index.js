import profileImg from '../../../assets/user.png'
import logOut from '../../../assets/log-out.png'
import budget from '../../../assets/budget.png'
import { useState } from 'react'

export const Settings = ({open, showModal}) =>{

    return(
        <div className="settings-container">
            <h3 className="nav-info_title" onClick={showModal}>settings</h3>
            <div className= {open ? 'nav-details' : 'hidden'}>
                <div className='nav-details_area'>
                    <img 
                         alt='Profile'
                         src={budget}
                         className='nav-details_icon'
                    />
                    <p className="nav-details_text">set budget</p>
                </div>
                <div className='nav-details_area'>
                    <img 
                        alt='Profile'
                        src={profileImg}
                        className='nav-details_icon'
                    />
                    <p className="nav-details_text">your profile</p>
                </div>
                <div className='nav-details_area'>
                    <img 
                        alt='Profile'
                        src={logOut}
                        className='nav-details_icon'
                    />
                    <p className="nav-details_text">log out</p>
                </div>
            </div>
        </div>
    )
}