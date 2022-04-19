import revenue from '../../../assets/revenue.png'
import costs from '../../../assets/costs.png'

export const AccountDetails = () =>{

    return(
        <div>
            <h3 className='nav-info_title'>account details</h3>
            <div className='nav-details'>
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