import revenue from '../../../assets/revenue.png'
import costs from '../../../assets/costs.png'
import { useState } from 'react'

export const AccountDetails = ({open, showModal}) =>{



    return(
        <div>
            <h3 className='nav-info_title' onClick={showModal}>account details</h3>
            <div className= {open ? 'nav-details' : 'hidden'}>
                <div className='nav-details_area'>
                    <img alt="costs" src={costs} className='nav-details_icon' />
                    <p className='nav-details_text'>costs</p>
                </div>
                <div className='nav-details_area'>
                    <img alt="revenue" src={revenue} className='nav-details_icon' />
                    <p className='nav-details_text'>revenue</p>
                </div>
            </div>           
        </div>
    )
}