import React from 'react'

function ContactPage(){
  return (
    <section id="contact-me" className="container pt-4">
    <div className="row justify-content-center">
     
      <form className="d-flex black-text flex-column w-50">
        <div className="d-flex flex-column">
          <label htmlFor="name" className="ct-label">Name:</label>
          <input type="text" name='name'/>          
       
          <label htmlFor="email" className="ct-label">Email address:</label>
          <input type="email" name='email' />          
      
          <label htmlFor="message" className="ct-label">Message:</label>
          <textarea name='message' rows='5'></textarea>       
        </div>
        <button type='submit' className="ct-submit-btn">Submit</button>
      </form>
    </div>      
  </section>
  )
}

export default ContactPage