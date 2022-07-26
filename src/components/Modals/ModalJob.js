import React, { useEffect }  from 'react' 
import ReactDom from 'react-dom'
import { ExternalLink } from 'react-external-link'
import './Modal.css'

const ModalJob = ({ closeModal }) => {

    useEffect(() => {
        window.addEventListener('click', (e) => {
            const modalBackground = document.getElementById("background")
           
            
            

            if (e.target === modalBackground) {
                closeModal(false)
            }
        })
    })
    
    
    
    return  ReactDom.createPortal(
        
            <div className="modalBackground" id="background">
            <div className="modalContainer">
            
                <div className="title">
                    <h1>Heads up!</h1>
                </div>
                <div className="body">
                    <p>Page will open in new tab</p>
                    <h3>"https://ancient-scrubland-95145.herokuapp.com/"</h3>
                </div>
                <div className="footer"> 
                
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                
                    <ExternalLink href="https://ancient-scrubland-95145.herokuapp.com/">
                        <button onClick={() => closeModal(false)}>Continue</button>
                    </ExternalLink>
                </div>
                    
                    
                
            </div>
            </div>, document.getElementById('modal')
    
    )

        
          

    
    
}

export default ModalJob