import React from 'react' 
import './Modal.css'

const Modal = () => {


    return (
        <div className="modal-container" id="modal">
        <div className="modal">
            <div className="modal-header">
                <h3>Let me hear from you!</h3>
            </div>
            <div className="modal-content" id="modal-box">
                <p>I will respond as soon as I am able! Thank you!</p>
                <form className="modal-form">
                    <div>
                        <label for="name">Name or Company</label>
                        <input className="form-input" type="text" id="name" placeholder="Enter Name" />
                    </div>
                    <div>
                        <label for="email">Best Contact Email</label>
                        <input className="form-input" type="email" id="email" placeholder="Enter Email" />
                    </div>
                    <div>
                        <textarea name="message" placeholder="Type Message Here"></textarea>
                        
                    </div>
                    
                    <input id="modal-submit" className="submit-btn" type="button" value="Submit" />
                </form>
            </div>
        </div>
    </div>
    )
}

export default Modal 