import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [quakes, setQuakes] = useState([]);
  const earthquake = async () => {
    const res = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-02&limit=10`
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
            <img src="https://play-lh.googleusercontent.com/KA6QggoPyOOcY2PeR447S0vqK8GvieUIBAXOCcgXhsGuNRwZ6WyihqoAJmlv7YubCmM"
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
                  {element.properties.time}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Home;