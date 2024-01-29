import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { OsmProvider } from "../../config/Osm-Provider/Osm-Provider";
import "leaflet/dist/leaflet.css";
import "./ReactLeafletMap.css";
import img1 from "../../assets/img/sale-01.png";
import locationIcon from "@mui/icons-material/LocationOn";
import L, { Icon } from "leaflet";
import MapDetails from "../../types/MapDetails";

import { useMyContext } from "../../config/ContextAPI";

// Separate component to handle map events
// Hook to listen for click events on the map
const MapEventHandler = ({ mapHandleClick }: { mapHandleClick: Function }) => {
  useMapEvents({
    click: (event) => {
      mapHandleClick(event.latlng.lat, event.latlng.lng);
    },
  });

  return null;
};

const ReactLeafletMap = (props: MapDetails) => {
  // This is the center variable and this gives because,
  // When the Map is load, initially The map should be zoomed
  // and point to a default location when the Map is initially loaded.
  // This is the Default value for it.
  // const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef<any>();

  const { useStateLocation, setUseStateLocation } = useMyContext();

  const customIcon = new L.Icon({
    iconUrl: img1,
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
    popupAnchor: [0, -32], // Popup anchor point
  });

  const mapHandleClick = (latitude: number, longitude: number) => {
    console.log("You clicked at Lat: ", latitude, " Long: ", longitude);
    setUseStateLocation({ lat: latitude, lng: longitude });
  };

  return (
    <>
      <div id="map" style={{ width: props.mapWidth }} onClick={props.onClick}>
        <MapContainer
          style={{ width: props.mapWidth, height: props.mapHeight }}
          ref={mapRef}
          center={useStateLocation}
          zoom={ZOOM_LEVEL}
        >
          <TileLayer
            url={OsmProvider.url}
            attribution={OsmProvider.attribution}
          />

          {/* Separate component to handle map events */}
          <MapEventHandler mapHandleClick={mapHandleClick} />

          <Marker icon={customIcon} position={useStateLocation}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default ReactLeafletMap;
