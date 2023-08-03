import React, { useState } from 'react';
import validator from 'validator'; // Import validator library
import './Banner.css';

function Banner() {
  const [name, setName] = useState('');
  const [phone , setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message ,setMessage] = useState(''); 
  const [choose ,setChoose] = useState('');

  const [messageerror ,setMessageError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] =useState('');
  const [emailError, setEmailError] = useState('');
  const[chooseError, setChooseError] = useState('');

  const validateForm = () => {
    let isValid = true;
    if (name.trim() === '') {
      setNameError('Name cannot be empty **');
      isValid = false;
    } else {
      setNameError('');
    }
    if(phone.trim()===''){
      setPhoneError('phone cannot be empty **');
      isValid=false;
    }else{
      setPhoneError('');
    }
    if(message.trim() === '')
    {
      setMessageError('Message cannot be empty **');
      isValid=false;
    }else{
      setMessageError('');
    }
    if(choose.trim() === ''){
      setChooseError('choose cannot be empty **');
      isValid=false;
    }else{
      setChooseError('');
    }

    if (!validator.isEmail(email)) {
      setEmailError('Invalid email format **');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Process form data
      console.log('Name:', name);
      console.log('Email:', email);

      // You can make API calls, update state, etc. here
    }
  };

  return (
    <div className="home-banner">
      <div className="home-banner1">
        <h1>
          <span>Top Rated Certificate Courses to</span>
          <br />
          Get Recruited and Start Earning
        </h1>
        <p>
          Invest in your future with a certificate course, leading to career advancement
          <br />
          and increased earning potential. Gain soft skills and industry
          <br /> connections through mentorship and networking opportunities
        </p>
      </div>
      <div className="home-banner2">
        <form onSubmit={handleSubmit}>
          <div className='form-valid-here'>
            <label htmlFor="name">Name:</label><br></br>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
            {nameError && <span className="error">{nameError}</span>}
          </div>
          <div className='form-valid-here'>
            <label htmlFor="email">Phone:</label><br></br>
            <input
              type="text"
              id="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            /><br></br>
            {phoneError && <span className="error">{phoneError}</span>}
          </div>
          <div className='form-valid-here'>
            <label htmlFor="email">Email:</label><br></br>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br></br>
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div className='form-valid-here'>
            <label htmlFor="email">Message:</label><br></br>
            <textarea 
            id="message"
              type="text"
              rows="6"
              cols=""
              value={message}
              onChange={(e) =>setMessage(e.target.value)}
            /><br></br>
            {messageerror && <span className="error">{messageerror}</span>}
          </div>
          <div className='form-valid-here'> 
            <label htmlFor="email">Choose Course:</label><br></br>
            <input
              type="text"
              id="text"
              value={choose}
              onChange={(e) => setChoose(e.target.value)}
            /><br></br>
            {chooseError&& <span className="error">{chooseError}</span>}
          </div>
          <div className='button_design'>
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Banner;
