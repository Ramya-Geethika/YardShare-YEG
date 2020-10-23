import React from 'react';
import './PostListing.scss';
import Button from './Button';

function PostListing () {
  return ( 
    <body class = "body"> 
    <div class="background">
       <div class="blur"></div>
    </div>
    <div class="modal" id="modal">
  <div class="content">
  <form class='form' autoComplete="off" onSubmit={event => event.preventDefault()}>
  <label for="category">I am a</label>
    <select class = 'label' id="category" name="category">
       <option value="landholder">Landholder</option>
       <option value="grower">Grower</option>
      </select>
      <input class = 'input' placeholder = 'Name'/>
      <input class = 'input' placeholder = 'Email'/>
      <input class = 'input' placeholder = 'Address'/>
      <textarea class = 'input' placeholder = 'Message'/>

    </form>
  </div>
  <div class="actions">
    <Button class="toggle-button">Close</Button>
    <Button class="toggle-button">Submit</Button>
  </div>
</div>
</body>
  );

}


export default PostListing;