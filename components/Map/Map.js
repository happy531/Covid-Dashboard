import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import data from "../../data/countries.json";

const countryStyles = {
  fillColor: "#EBECF0",
  fillOpacity: 1,
  color: "black",
  weight: 1,
};

const Map = () => {
  const onEachCountry = (country, layer) => {
    layer.on({
      click: (event) => {
        console.log(event.sourceTarget.feature.properties.ADMIN);
      },
    });
  };

  return (
    <MapContainer
      style={{ height: "50%", width: "40%" }}
      zoom={4}
      center={[52.23, 21]}
    >
      <GeoJSON
        style={countryStyles}
        data={data.features}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};

export default Map;
