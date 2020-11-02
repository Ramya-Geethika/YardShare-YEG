import React from 'react';
import './Connectyards.scss';
import Button from './Button';
import useVisualMode from '../hooks/useVisualMode';
import PostListing from './PostListing';

import axios from 'axios';

import LeafletMap from './LeafletMap';

function Connectyards() {
  const POSTLISTING = "POSTLISTING";
  const BUTTON = "BUTTON";
  const { mode, transition, back } = useVisualMode(BUTTON);


  return (
    <div className='div'>
      <p2>The Grower and Landholder <a href="https://docs.google.com/document/d/1Xqv2QrglAy-ZCaug7seG1LxnAKKWTcbbsZDAK3LDqEI/edit">make an agreement</a> about how to use the yard and share the produce. The Grower produces food for themselves (or to provide extra income) and the Landholder makes good use of their yard space while receiving fresh food grown on their own lawn. Yard Sharing helps increase local food security and builds resilient communities! No money is allowed to be charged for the use of the yard. - Sundance Harvest</p2>
      <Button onClick={() => transition(POSTLISTING)} >Post a Listing</Button>
      { mode === POSTLISTING && <PostListing close={back} />}
      <LeafletMap />
    </div>
  );
}

export default Connectyards;