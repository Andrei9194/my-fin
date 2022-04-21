import '../index.css'
export const CostsModal =({showModal, closeModal})=>{

    return(
        <div className={showModal ? "modal-content": 'hidden'}>      
            <p className="modal-closeButton" onClick={() => closeModal(false)}>X</p>
            <div>
                <h3 className="modal-title">Enter your costs:</h3>
                <from className="modal-form">
                    <div className='modal-form_inputArea'>
                        <input className="modal-input" id="count" type="number" name="count" placeholder='0'/>
                        <input className="modal-textArea" placeholder="Add note"/>
                    </div>
                    <button type='submit'className="modal-button">Submit</button>
                </from>
            </div> 
        </div>  
    )
}