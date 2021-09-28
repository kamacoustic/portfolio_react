import React, { useEffect, useState } from 'react' 
import ReactDom from 'react-dom'
import { send } from 'emailjs-com'
import './ModalContact.css'




const ModalContact = ({closeModal}) => {

   const [contactInfo, setContactInfo] = useState({
        from_name: '',
        to_name: 'Mr. Mojo',
        reply_to: '',
        message: ''
    })

    const [thanksMessage, setThanksMessage] = useState(false)

    const toSubmit = (e) => {
        e.preventDefault()
        send(
            'service_1p2rvpc',
            'template_5l6ljre',
            contactInfo,
            'user_lqLr167J4YsZhVWPD9Ew4'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text)
                setThanksMessage(true)
                
            })
            .catch((err) => {
                console.log('FAILED', err)
            })
    }

    const handleChange = (e) => {
        setContactInfo({...contactInfo, [e.target.name]: e.target.value})
    }
  


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
                    <form className="modal-form" method="post" onSubmit={toSubmit}>
                        <div>
                            <label htmlFor="name">Name or Company</label>
                            <input 
                            className="form-input" 
                             type="text" 
                             name="from_name" 
                             onChange={handleChange}
                             value={contactInfo.from_name}
                             placeholder="Enter Name" 
                             />
                        </div>
                        <div>
                            <label htmlFor="email">Best Contact Email</label>
                            <input 
                            className="form-input" 
                            type="email" 
                            name="reply_to" 
                            onChange={handleChange}
                            value={contactInfo.reply_to}
                            placeholder="Enter Email" 
                            />
                        </div>
                        <div>
                            <textarea
                              name="message" 
                              placeholder="Type Message Here"
                              onChange={handleChange}
                              value={contactInfo.message}
                              >
                              </textarea>
                        </div>
                        
                        <input 
                        id="modal-submit" 
                        className="submit-btn" 
                        type="submit" 
                        value="submit"
                        />
                        <div>
                        {thanksMessage && <h3>Thanks!</h3>}
                        </div>
                    </form>
                </div>
            </div>
        </div>, document.getElementById('modal')
    )

}

export default ModalContact