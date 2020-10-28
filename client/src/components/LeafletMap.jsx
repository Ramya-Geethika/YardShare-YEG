import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './LeafletMap.scss';
import axios from 'axios';

function LeafletMap() {

  const [position, setPosition] = useState({
    lat: 53.631611,
    lng: -113.323975,
    zoom: 8,
    markerData: [[53.5385615, -113.6315854], [53.5661921, -113.5217776]],
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

  const copyPosition = { ...position };

  const LatLngTuple = [copyPosition.lat, copyPosition.lng];

  return (
    <Map id='mapId' center={LatLngTuple} zoom={copyPosition.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
      </TileLayer>
      {copyPosition.markerData.map((element, index) =>
        <Marker key={index} position={element}>
          <Popup>
            <span style={{ display: "block" }}>{copyPosition.growersData.map((element) =>
              element.name
            )}</span>
          </Popup>
        </Marker>
      )}
    </Map>
  )
}

export default LeafletMap;