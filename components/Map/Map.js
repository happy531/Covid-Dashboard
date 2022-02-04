import React, { useRef } from "react";
import { useRouter } from "next/router";
import { MapContainer, GeoJSON, TileLayer, useMapEvent } from "react-leaflet";

import mapData from "../../data/countries.json";
import { useAppContext } from "../../context/AppContext";

const countryStyles = {
  fillColor: "#EBECF0",
  fillOpacity: 0,
  color: "black",
  weight: 1,
};

function SetViewOnClick({ animateRef }) {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: !animateRef.current || false,
    });
  });

  return null;
}

const Map = () => {
  const router = useRouter();
  const { countryInfo } = useAppContext();
  const { lat, long } = countryInfo;

  const animateRef = useRef(false);

  const onEachCountry = (country, layer) => {
    layer.on({
      click: (event) => {
        const country =
          event.sourceTarget.feature.properties.ADMIN.toLowerCase().trim();
        setTimeout(() => {
          router.replace(`/${country}`);
        }, 1);
      },
    });
  };

  return (
    <MapContainer
      style={{ height: "50%", width: "40%" }}
      zoom={4}
      center={[lat, long]}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetViewOnClick animateRef={animateRef} />
      <GeoJSON
        style={countryStyles}
        data={mapData.features}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};
export default Map;
