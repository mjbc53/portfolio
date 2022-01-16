import React, { useState } from 'react'
//import email validator function from utils
import { validateEmail } from '../../utils/helpers'

//contact page component
function ContactPage(){

  //set state for form
  const [formState, setFormState] = useState({name:'', email: '', message: ""})

  //set state for the error message
  const [errorMessage, setErrorMessage] = useState('')

  //deconstruct formState
  const {name, email, message} = formState

  //function that will handle changes when inputs are clicked off of
  function handleChange(evt){
    //if evt target is email then check if the email matchs a regexr
    //if it matches do nothing if it doesnt then let the use know with error
    //message
    //else check to make sure the message/name has a length if not send error message
    //if no error message then it can be submitted
    if(evt.target.name === 'email'){
      const isValid = validateEmail(evt.target.value)

      if(!isValid){
        setErrorMessage('Your Email is Invalid')
      }else {
        setErrorMessage('')
      }
    } else{
      if(!evt.target.value.length){
        setErrorMessage(`${evt.target.name} is Required`)
      }else{
        setErrorMessage('')
      }
      if(!errorMessage){
        setFormState({...formState, [evt.target.name]: evt.target.value})
      }
    }
  }

  //submit the contact form console.log it for not since there is no backend
  function handleSubmit(evt){
    evt.preventDefault()
    console.log(formState)
  }

  return (
    <section id="contact-me" className="container pt-4">
    <div className="row justify-content-center">
     
      <form className="d-flex black-text flex-column w-50" onSubmit={handleSubmit}>
        <div className="d-flex flex-column">
          <label htmlFor="name" className="ct-label">Name:</label>
          <input type="text" name='name' onBlur={handleChange} defaultValue={email}/>          
       
          <label htmlFor="email" className="ct-label">Email address:</label>
          <input type="email" name='email' onBlur={handleChange} defaultValue={name}/>          
      
          <label htmlFor="message" className="ct-label">Message:</label>
          <textarea name='message' rows='5' onBlur={handleChange} defaultValue={message}></textarea>       
        </div>
        {errorMessage && (
          <div>
            <p className='error-msg-contact-form'>{errorMessage}</p>
          </div>
        )}
        
        <button type='submit' className="ct-submit-btn">Submit</button>
      </form>
    </div>      
  </section>
  )
}

export default ContactPage