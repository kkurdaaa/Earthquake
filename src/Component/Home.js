import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [quakes, setQuakes] = useState([]);
  const earthquake = async () => {
    const res = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&limit=20`
    );
    const data = await res.json();
    const date = new Date(data.features.time);
    setQuakes(data.features);
  };
  useEffect(earthquake, []);
  const date = new Date();

  return (
    <>
      <div>
        <header className="header">
          <div className="flexx">
            {" "}
            <img src="https://logodix.com/logo/1717199.png"
              style={{ color: "white", width: "5%" }}/>
            <h1 className="title">Home Page : Earthquakes </h1>
          </div>{" "}
          <h2 style={{ color: "white", paddingLeft: "5%", margin: "0" }}>
            {" "}
            {date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate()}{" "}
          </h2>
        </header>
      </div>
      <div className="container">
        <ul>
          {quakes.map((element) => {
            return (
              <Link to={`./Details/${element.id}`} key={element.id}>
                {" "}
                <li className="list">
                  {element.properties.place}
                </li>                  
              </Link>                  // {element.properties.time} put this to display time
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Home;