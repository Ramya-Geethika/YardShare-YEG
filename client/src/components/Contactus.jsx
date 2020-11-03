import React from 'react';
import './Contactus.scss';
import Button from './Button';
import { useState } from 'react';
import axios from 'axios';

function Contactus(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: ""
  });
  const [error, setError] = useState('');

  function submit() {

    const messageTxt = `Name: ${formData.name} \n Email: ${formData.email} \n Address: + ${formData.address}  \n Message: ${formData.message}`;

    const mail = {
      recipient: 'gurulakshmi.varadharaj@gmail.com',
      sender: 'gurulakshmi.ptme@gmail.com',
      subject: 'Enquiry in contactus form',
      text: messageTxt
    }

    if (formData.name === '') {
      setError('Name cannot be empty');
      console.log(error);
      return;
    }
    if (formData.email === '') {
      setError('Email cannot be empty');
      return;
    }
    if (formData.address === '') {
      setError('Address cannot be empty');
      return;
    }
    if (formData.message === '') {
      setError('Message cannot be empty');
      return;
    }

    setError('');
    axios.get(`http://localhost:3003/contactus/send-email?recipient=${mail.recipient}&sender=${mail.sender}&topic=${mail.subject}&text=${mail.text}`)
      .catch(err => {
        console.log("error ", err);
      });

  }

  const handleChange = (event) => {
    const newFormData = { ...formData }
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  }

  return (
    <div className='divClass'>
      <section className="validation">{error}</section>
      <form className='form' autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input className='input1' name="name" placeholder='Name' onChange={handleChange} value={formData.name} />
        <input className='input1' name="email" placeholder='Email' onChange={handleChange} value={formData.email} />
        <input className='input1' name="address" placeholder='Address' onChange={handleChange} value={formData.address} />
        <textarea className='text' name="message" placeholder='Message' onChange={handleChange} value={formData.message} />
      </form>
      <Button onClick={submit}>Submit</Button>
    </div>
  );

}


export default Contactus;