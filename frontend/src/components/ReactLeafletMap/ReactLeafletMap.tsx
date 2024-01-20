import React, { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { OsmProvider } from "../../config/Osm-Provider/Osm-Provider";
import "leaflet/dist/leaflet.css";
import "./ReactLeafletMap.css";
import img1 from "../../assets/img/sale-01.png";
import locationIcon from "@mui/icons-material/LocationOn";
import L, { Icon } from "leaflet";

const ReactLeafletMap = () => {
  // This is the center variable and this gives because,
  // When the Map is load, initially The map should be zoomed
  // and point to a default location when the Map is initially loaded.
  // This is the Default value for it.
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef<any>();

  const customIcon = new L.Icon({
    iconUrl: img1,
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
    popupAnchor: [0, -32], // Popup anchor point
  });

  return (
    <div id="map">
      <MapContainer ref={mapRef} center={center} zoom={ZOOM_LEVEL}>
        <TileLayer
          url={OsmProvider.url}
          attribution={OsmProvider.attribution}
        />

        <Marker icon={customIcon} position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ReactLeafletMap;
