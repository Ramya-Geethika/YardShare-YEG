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
    <body>
      <div>
        <div class="content">
          <section className="validation">{error}</section>
          <form class='form' autoComplete="off" onSubmit={event => event.preventDefault()}>
            <input class='input' name="name" placeholder='Name' onChange={handleChange} value={formData.name} />
            <input class='input' name="email" placeholder='Email' onChange={handleChange} value={formData.email} />
            <input class='input' name="address" placeholder='Address' onChange={handleChange} value={formData.address} />
            <textarea class='input' name="message" placeholder='Message' onChange={handleChange} value={formData.message} />
          </form>
        </div>
        <div class="actions">
          <Button class="toggle-button" onClick={submit}>Submit</Button>
        </div>
      </div>
    </body>
  );

}


export default Contactus;