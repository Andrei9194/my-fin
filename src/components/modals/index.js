import { useState, useEffect } from "react";
import './index.css'


export const Modals =({setFormData, formData, addRevenue, showModal, modalName, setShowModal, addCost, click,setClick}) => {

     useEffect(()=>{
        if((formData.count).length){
           setClick(true)
        }
      }, [formData.count])
      
   
    return (
        <div className={showModal ? "modal-content": 'hidden'} >      
            <p className="modal-closeButton" onClick={() => setShowModal(false)}>X</p> 
            <h3 className="modal-title">Enter your {modalName}:</h3>
            <from className="modal-form" >
                <div className='modal-form_inputArea'>
                    <label htmlFor='count'>
                        <input 
                        className={((!(formData.count).length  && !click) ? 'modal-input_error modal-input' : ' modal-input')}
                        id="count" type="number" name="count" 
                        placeholder={((!(formData.count).length && !click) ? `Please, enter ${modalName}` : '0')}
                        value={formData.count}
                        onChange={(e) => setFormData({...formData, count: e.target.value})}
                        />
                    </label>
                    <label htmlFor='note'> 
                        <input className="modal-textArea" value={formData.note} 
                            id='note'
                            name='note'
                            onChange={(e) => setFormData({...formData, note: e.target.value})}
                            placeholder="Add note"/>
                    </label>
                    </div>
                    {
                        modalName === 'revenue' ? 
                        <button type='submit'className="modal-button" disabled={!click} onClick={addRevenue}>Add revenue</button>
                        :  <button type='submit'className="modal-button" disabled={!click} onClick={addCost}>Add cost</button>
                    }
            </from>
        </div>

    );
}
