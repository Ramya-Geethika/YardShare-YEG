import React, { useState, useEffect } from 'react';
import './Connectyards.scss';
import Button from './Button';
import useVisualMode from '../hooks/useVisualMode';
import PostListing from './PostListing';
import LeafletMap from './LeafletMap';
import axios from 'axios';

function Connectyards() {
  const POSTLISTING = "POSTLISTING";
  const BUTTON = "BUTTON";
  const { mode, transition, back } = useVisualMode(BUTTON);

  const [position, setPosition] = useState({
    lat: 53.631611,
    lng: -113.323975,
    zoom: 10.3,
    markerData: [],
    growersData: [],
    landholdersData: []
  });

  useEffect(() => {
    Promise.all([
      axios.get("/growers"),
      axios.get("/landholders"),
    ]).then((all) => {
      setPosition(prev => ({ ...prev, growersData: all[0].data, landholdersData: all[1].data }));
    })
  }, []);

  function submit() {
    Promise.all([
      axios.get("/growers"),
      axios.get("/landholders"),
    ]).then((all) => {
      setPosition(prev => ({ ...prev, growersData: all[0].data, landholdersData: all[1].data }));
      back();
    });
  }

  return (
    <div className='div'>
      <p>
        The Grower and Landholder <a href="https://docs.google.com/document/d/1Xqv2QrglAy-ZCaug7seG1LxnAKKWTcbbsZDAK3LDqEI/edit">make an agreement</a> about how to use the yard and share the produce. The Grower produces food for themselves (or to provide extra income) and the Landholder makes good use of their yard space while receiving fresh food grown on their own lawn. Yard Sharing helps increase local food security and builds resilient communities! No money is allowed to be charged for the use of the yard. - Sundance Harvest
    </p>
      <Button onClick={() => transition(POSTLISTING)} >Post a Listing</Button>
      { mode === POSTLISTING && <PostListing close={back} submit={submit} />}
      <LeafletMap mapInput={position} />
    </div>
  );
}

export default Connectyards;