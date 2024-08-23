import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_bg6winp', 'template_djhmafn', form.current, {
            publicKey: 'cVBf7nQwR9JgBlZoL',
          })
          .then(
            () => {
              alert('SUCCESS!');
            },
            (error) => {
              alert('Someting is wrong!')
            },
          );
      };
    
    
    
    return (
        <div>
            <h1 className='my-5 text-center'>Contact Page</h1>
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-5">
                    <form onSubmit={sendEmail} ref={form}>
                        <div className="mb-3">
                            <label  className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Surname</label>
                            <input type="text" className="form-control" name='surname'  />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Email address</label>
                            <input type="email" className="form-control"  name='email'/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Phone</label>
                            <input type="tel" className="form-control"  name='phone'/>
                        </div>

                        <div className="mb-3">
                            <label  className="form-label">Message</label>
                            <input type="text" className="form-control" name='message' />
                        </div>


                        <button type="submit" className="btn btn-warning">Send</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact