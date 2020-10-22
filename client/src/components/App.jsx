import React from 'react';
import "./App.scss";
import Navbar from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Connectyards from './Connectyards';
import Gardeningguide from './Gardeningguide';
import Coordinators from './Coordinators';
import Contactus from './Contactus';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/connectyards'>
          <Connectyards />
        </Route>
        <Route path='/gardeningguide'>
          <Gardeningguide />
        </Route>
        <Route path='/coordinators'>
          <Coordinators />
        </Route>
        <Route path='/contactus'>
          <Contactus />
        </Route>
      </Router>
    </div>
  );
}

export default App;