import React, { useState } from 'react'
//import email validator function from utils
import { validateEmail, captializeFirstLetter } from '../utils/helpers'
import emailjs from '@emailjs/browser'
import ArrowBar from '../components/ArrowBar'

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
        setFormState({...formState, email: evt.target.value})
      }
    } else{
      if(!evt.target.value.length){
        setErrorMessage(`${captializeFirstLetter(evt.target.name)} is Required`)
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
    //deconstruct from state variables
    const {name, email, message} = formState
    //create template for emailjs
    const templateParams = {
      from_name: name + " " + email,
      to_name: 'mjbc53@gmail.com',
      message: message
    }

    //if there is missing data in the state then send a message and jump out of function
    if(name === '' && email === '' && message === ''){
      return setErrorMessage('Please enter all of the fields before submitting')
    }

    //emailjs function call
    //send ids and template to emailjs
    //then get the response from emailjs and return a message
    //if there is an error then return a message
    emailjs
      .send("service_e0r2ba8", "template_z78g1mg", templateParams, "user_BnWxJEHRo23hAp3V9urqU")
      .then((res) => {
        console.log('SUCCESS!', res.status, res.text)
        setErrorMessage('Success the email has been sent! Thank you for your time!')
      }, (err) => {
        console.log('FAILed...', err)
      })
  }

  return (
  <section id="contact-me" className="container pt-4">
      <ArrowBar page='contact'/>
    <div className="row justify-content-center">
     
      <form 
      action='mailto:mjbc53@gmail.com'
      method='POST'
      encType='multipart/form-data'
      name='EmailForm'
      className="d-flex black-text flex-column w-50" onSubmit={handleSubmit}>
        <div className="d-flex flex-column">
          <label htmlFor="name" className="ct-label">Name:</label>
          <input
          placeholder='James Bond'
          className="ct-input" 
          type="text" 
          name='name' 
          onBlur={handleChange} 
          defaultValue={name}/>          
       
          <label htmlFor="email" className="ct-label">Email address:</label>
          <input
          placeholder='example@example.com'
          className="ct-input" 
          type="email" 
          name='email' 
          onBlur={handleChange} 
          defaultValue={email}/>          
      
          <label htmlFor="message" className="ct-label">Message:</label>
          <textarea
          placeholder='Hello how are you?....'
          className="ct-input" 
          name='message' 
          rows='5' 
          onBlur={handleChange} 
          defaultValue={message}></textarea>       
        </div>
        {errorMessage && (
          <div>
            <p className='error-msg-contact-form mt-3'>{errorMessage}</p>
          </div>
        )}
        
        <button type='submit' value="Submit"className="ct-submit-btn">Submit</button>
      </form>
    </div>      
  </section>
  )
}

export default ContactPage