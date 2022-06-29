import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
function Details() {
  let { eventid } = useParams();
  const [details, setDetails] = useState({
    place: "",
    time: "",
    magnitude: "",
    longitude: "",
    latitude: "",
  });

  const earthquake = async () => {
    const res = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${eventid}`
    );
    const data = await res.json();
    setDetails({
      place: data.properties.place,
      time: data.properties.time,
      magnitude: data.properties.mag,
      longitude: data.properties.products.origin[0].properties.longitude,
      latitude: data.properties.products.origin[0].properties.latitude,
    });
  };
  
  useEffect(earthquake, [eventid]);

  return (
    <>
      <div className="details">
        <Link to={"/"}>
          <button className="btn">Back to Home</button>
        </Link>{" "}
        <h1>{details.place}</h1>
        <p>time: {details.time} </p>
        <p>magnitude: {details.magnitude}</p>
        <p>longitude: {details.longitude}</p>
        <p>latitude: {details.latitude}</p>
      </div>
    </>
  );
}

export default Details;
