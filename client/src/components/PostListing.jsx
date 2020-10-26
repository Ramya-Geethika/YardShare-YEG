import React from 'react';
import './PostListing.scss';
import Button from './Button';
import { useState } from 'react';
import axios from 'axios';

function PostListing(props) {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    email: "",
    address: "",
    message: ""
  });

  function axiosCall (url) {
      (axios.put((url), formData)
      .then(() => {
        setFormData({ ...formData });
      }));
  }

  function submit() {
    const urlGrowers = "http://localhost:3003/growers";
    const urlLandholders = "http://localhost:3003/landholders";
    console.log(formData.category);
    ((formData.category === 'f') ?  axiosCall(urlGrowers): axiosCall(urlLandholders))
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
            <label for="category">I am a</label>
            <select class='label' onChange={handleChange} id="category" name="category" value={formData.category} >
              <option value=""></option>
              <option value="t">Landholder</option>
              <option value="f">Grower</option>
            </select>
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


export default PostListing;