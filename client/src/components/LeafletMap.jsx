import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './LeafletMap.scss';
import L from 'leaflet';

function LeafletMap(props) {

  const copyPosition = { ...props.mapInput };

  const LatLngTuple = [copyPosition.lat, copyPosition.lng];

  const growerIcon = new L.Icon({
    iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  })

  const landholderIcon = new L.Icon({
    iconUrl: 'Images/icons8-earth-care.png',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  })

  return (
    <Map id='mapId' center={LatLngTuple} zoom={copyPosition.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
      </TileLayer>
      {copyPosition.growersData.map((element, index) =>
        <Marker key={index} position={[element.latitude, element.longitude]} icon={growerIcon}>
          <Popup>
            <span style={{ display: "block" }}>
              {element.name}<br />{element.email}
            </span>
          </Popup>
        </Marker>
      )}
      {copyPosition.landholdersData.map((elm, indx) =>
        <Marker key={indx} position={[elm.latitude, elm.longitude]} icon={landholderIcon}>
          <Popup>
            <span style={{ display: "block" }}>
              {elm.name}<br />{elm.email}
            </span>
          </Popup>
        </Marker>
      )}
    </Map>
  )
}

export default LeafletMap;