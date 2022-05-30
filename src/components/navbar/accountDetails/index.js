import revenue from '../../../assets/revenue.png'
import costs from '../../../assets/costs.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const AccountDetails = ({open, showModal}) =>{
    return(
        <div>
            <h3 className='nav-info_title' onClick={showModal} >account details</h3>
            <div className={open ? 'nav-details' : 'hidden'}>
                <NavLink className='nav-details_area' to='/costs'>
                    <img alt="costs" src={costs} className='nav-details_icon' />
                    <p className='nav-details_text'>costs</p>
                </NavLink>
                <NavLink to='/revenue' className='nav-details_area'>
                        <img alt="revenue" src={revenue} className='nav-details_icon' />
                        <p className='nav-details_text'>revenue</p>
                </NavLink>
            </div>
        </div>
    )
}