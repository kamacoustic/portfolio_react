import React, { useEffect, useState } from 'react' 
import ReactDom from 'react-dom'
import './ModalContact.css'


const ModalContact = ({closeModal}) => {

 {/*   const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()
        

    } */}

    useEffect(() => {
        window.addEventListener('click', (e) => {
            const modalBackground = document.getElementById("background")
          
    
            if (e.target === modalBackground) {
                closeModal(false)
            }
        })
    })

    return ReactDom.createPortal (
        <div className="modalBackground" id="background">
            <div className="modalContainer">
                <div className="title">
                    <h3>Let me hear from you!</h3>
                </div>

                <div className="modal-content" id="modal-box">
                    <p>I will respond as soon as I am able! Thank you!</p>
                    <form className="modal-form" action="index.php?did_email=1#contact" method="post">
                        <div>
                            <label htmlFor="name">Name or Company</label>
                            <input 
                            className="form-input" 
                             type="text" 
                             id="name" 
                             placeholder="Enter Name" 
                             />
                        </div>
                        <div>
                            <label htmlFor="email">Best Contact Email</label>
                            <input 
                            className="form-input" 
                            type="email" 
                            id="email" 
                            placeholder="Enter Email" 
                            />
                        </div>
                        <div>
                            <textarea
                             id="message"
                              name="message" 
                              placeholder="Type Message Here"
                              >
                              </textarea>
                        </div>
                        <input type="hidden" id="process-email" name="process-email" value="1" />
                        <input 
                        id="modal-submit" 
                        className="submit-btn" 
                        type="submit" 
                        value="submit"
                        />
                    </form>
                </div>
            </div>
        </div>, document.getElementById('modal')
    )

}

export default ModalContact