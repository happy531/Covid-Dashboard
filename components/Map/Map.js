import React from "react";
import { useRouter } from "next/router";
import { MapContainer, GeoJSON } from "react-leaflet";

import mapData from "../../data/countries.json";
import { useAppContext } from "../../context/AppContext";

const countryStyles = {
  fillColor: "#EBECF0",
  fillOpacity: 1,
  color: "black",
  weight: 1,
};

const Map = () => {
  const router = useRouter();
  const { countryInfo } = useAppContext();
  const { lat, long } = countryInfo;
  console.log(countryInfo);

  const onEachCountry = (country, layer) => {
    layer.on({
      click: (event) => {
        const country =
          event.sourceTarget.feature.properties.ADMIN.toLowerCase().trim();
        router.replace(`/${country}`);
      },
    });
  };

  return (
    <MapContainer
      style={{ height: "50%", width: "40%" }}
      zoom={4}
      center={[lat, long]}
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
