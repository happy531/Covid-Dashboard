import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { MapContainer, GeoJSON } from "react-leaflet";

import mapData from "../../data/countries.json";

const countryStyles = {
  fillColor: "#EBECF0",
  fillOpacity: 1,
  color: "black",
  weight: 1,
};

const Map = () => {
  const router = useRouter();

  const onEachCountry = (country, layer) => {
    layer.on({
      click: (event) => {
        const country =
          event.sourceTarget.feature.properties.ADMIN.toLowerCase();
        console.log(country);
        router.replace(`/${country}`);
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
        data={mapData.features}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};
export default Map;
