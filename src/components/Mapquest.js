import React, { useEffect } from "react";
import L from "leaflet";

//   "HrY9E2m6hAltF5LAZeTDknOZVXcolKWC"

const Mapquest = ({ height, width, center, tileLayer, zoom, apiKey }) => {
    useEffect(() => {
        // api key
        L.mapquest.key = apiKey;

        // Initializing map
        const map = L.mapquest.map("map", {
            center,
            layers: L.mapquest.tileLayer(tileLayer),
            zoom
        });

        map.addControl(L.mapquest.control());
    });

    return (
        <div id="map" style={{ width, height }}>
            <p>Loading map...</p>
        </div>
    );
};

export default Mapquest;
