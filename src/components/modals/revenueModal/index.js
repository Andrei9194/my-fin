import '../index.css'
export const RevenueModal =()=>{

    return(
        <div className="modal-content">      
            <p className="modal-closeButton">X</p>
            <div>
                <h3 className="modal-title">Enter your revenue:</h3>
                <from className="modal-form">
                    <label htmlFor="count">
                        <input className="modal-input" id="count" type="number" name="count" />
                        <textarea className="modal-textArea" placeholder="Add note"></textarea>
                    </label>
                    <button type='submit'className="modal-button">Submit</button>
                </from>
            </div> 
        </div>      
    )
}