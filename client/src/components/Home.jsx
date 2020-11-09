import React from 'react';
import "./Home.scss";

function Home() {
  return (
    <div>
      <p className="homeStyle">
        ‘Yard Sharing’ is a popular way across Canada to help people who want to grow their own fresh food but don’t have access to gardening space.
        People who have space they aren’t using (Landholder) offer it to be used by a local Grower.
    </p>
      <div>
        <img
          src="Images/Homepage.jpg"
          alt="YardShare"
        />
      </div >
    </div>
  )
}

export default Home;