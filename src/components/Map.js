import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mapquest from "./Mapquest";

function Map() {
    const [lat, setLat] = useState("37.423581");
    const [lng, setLng] = useState("-122.086672");

    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container-fluid">
                <div className="row pl-3 pr-3 pt-3 pb-3">
                    <div className="col-sm-10">Search</div>
                    <div className="col-sm-2">My Location</div>
                </div>
                <Mapquest
                    height="80vh"
                    width="100%"
                    center={[lat, lng]}
                    tileLayer={"map"} // map, dark
                    zoom={12}
                    apiKey="HrY9E2m6hAltF5LAZeTDknOZVXcolKWC"
                />
            </div>
        </div>
    );
}

export default Map;

// L.mapquest.key = 'KEY';
// var baseLayer = L.mapquest.tileLayer('dark');

// L.mapquest.geocoding().geocode(['New York, NY'], showMap);

// function showMap(err, data) {
//   var map = createMap();
//   map.addControl(L.mapquest.control());
//   addLayerControl(map);
// }

// function createMap() {
//   var map = L.mapquest.map('map', {
//     center: [40.7237, -73.9825],
//     zoom: 14,
//     layers: baseLayer
//   });
//   return map;
// }

// function addLayerControl(map) {
//   L.control.layers({
//     'Map': L.mapquest.tileLayer('map'),
//     'Satellite': L.mapquest.tileLayer('satellite'),
//     'Hybrid': L.mapquest.tileLayer('hybrid'),
//     'Light': L.mapquest.tileLayer('light'),
//     'Dark': baseLayer
//   }, {}, { position: 'topleft'}).addTo(map);
// }
