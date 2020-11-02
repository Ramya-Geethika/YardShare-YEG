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
    message: "",
    latitude: 0,
    longitude: 0
  });


  //Helper function for axios call
  function axiosCall(url) {
    (axios.put((url), formData)
      .then(() => {
        setFormData({ ...formData });
      }));
  }


  function submit() {
    const urlGrowers = "http://localhost:3003/growers";
    const urlLandholders = "http://localhost:3003/landholders";
  
    const getLatLng = (accessToken) => {
      axios.get(`https://us1.locationiq.com/v1/search.php?key=${accessToken}&q=${formData.address}&format=json`,
      ).then(response => {
        const newFormData = { ...formData }
        newFormData.latitude = response.data[0].lat;
        newFormData.longitude = response.data[0].lon;
        setFormData({ ...newFormData });
      }).catch(error => console.log)
    }
    getLatLng('pk.3d27a7c656ceee3b9160fa36a8028e40');
    ((formData.category === 'f') ? axiosCall(urlGrowers) : axiosCall(urlLandholders))
  }

  //Set the form input data

  const handleChange = (event) => {
    const newFormData = { ...formData }
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  }

  return (
    <body className="body">
      <div className="background">
        <div className="blur"></div>
      </div>
      <div className="modal" id="modal">
        <div className="content">
          <form className='form' autoComplete="off" onSubmit={event => event.preventDefault()}>
            <label for="category">I am a</label>
            <select className='label' onChange={handleChange} id="category" name="category" value={formData.category} >
              <option value=""></option>
              <option value="t">Landholder</option>
              <option value="f">Grower</option>
            </select>
            <input className='input' name="name" placeholder='Name' onChange={handleChange} value={formData.name} />
            <input className='input' name="email" placeholder='Email' onChange={handleChange} value={formData.email} />
            <input className='input' name="address" placeholder='Address' onChange={handleChange} value={formData.address} />
            <textarea className='input' name="message" placeholder='Message' onChange={handleChange} value={formData.message} />
          </form>
        </div>
        <div className="actions">
          <Button className="toggle-button" onClick={props.close}>Close</Button>
          <Button className="toggle-button" onClick={submit}>Submit</Button>
        </div>
      </div>
    </body>
  );
}


export default PostListing;