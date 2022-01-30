import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import data from "../../data/countries.json";

const Map = () => {
  return (
    <MapContainer
      style={{ height: "50vh", width: "40vw" }}
      zoom={2}
      center={[20, 100]}
    >
      <GeoJSON data={data.features} />
    </MapContainer>
  );
};

export default Map;
