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

  function submit (url) {
    
  }

  const handleChange = (event) => {
    const newFormData = { ...formData }
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  }

  return (
    <body class="body">
      <div class="background">
        <div class="blur"></div>
      </div>
      <div class="modal" id="modal">
        <div class="content">
          <form class='form' autoComplete="off" onSubmit={event => event.preventDefault()}>
            <input class='input' name="name" placeholder='Name' onChange={handleChange} value={formData.name} />
            <input class='input' name="email" placeholder='Email' onChange={handleChange} value={formData.email} />
            <input class='input' name="address" placeholder='Address' onChange={handleChange} value={formData.address} />
            <textarea class='input' name="message" placeholder='Message' onChange={handleChange} value={formData.message} />
          </form>
        </div>
        <div class="actions">
          <Button class="toggle-button" onClick={props.close}>Close</Button>
          <Button class="toggle-button" onClick={submit}>Submit</Button>
        </div>
      </div>
    </body>
  );

}


export default Contactus;