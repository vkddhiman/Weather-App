import React from "react";
import "./History.css";
// import 'bootstrap/dist/css/bootstrap.css';

const History = ({ history }) => {
  return (
    <div>
      {!history ? (
        <p></p>
      ) : (
        <div className="lastDate">
          <div className="box">
            <div
              style={{ fontSize: "25px", color: "lightblue", padding: "4px" }}
            >
              <p>Date:</p>
              <p>{history.forecast.forecastday[0].date}</p>
            </div>
            <p>Sunrise: </p>
            <p>{history.forecast.forecastday[0].astro.sunrise}</p>
            <p>Sunset: </p>
            <p>{history.forecast.forecastday[0].astro.sunset}</p>
            <p>Moonrise: </p>
            <p>{history.forecast.forecastday[0].astro.moonrise}</p>
            <p>Moonset: </p>
            <p>{history.forecast.forecastday[0].astro.moonset}</p>
          </div>
          <div className="box">
            <div
              style={{ fontSize: "25px", color: "lightblue", padding: "4px" }}
            >
              <p>Date:</p>
              <p>{history.forecast.forecastday[1].date}</p>
            </div>
            <p>Sunrise: </p>
            <p>{history.forecast.forecastday[1].astro.sunrise}</p>
            <p>Sunset: </p>
            <p>{history.forecast.forecastday[1].astro.sunset}</p>
            <p>Moonrise: </p>
            <p>{history.forecast.forecastday[1].astro.moonrise}</p>
            <p>Moonset: </p>
            <p>{history.forecast.forecastday[1].astro.moonset}</p>
          </div>
          <div className="box">
            <div
              style={{ fontSize: "25px", color: "lightblue", padding: "4px" }}
            >
              <p>Date:</p>
              <p>{history.forecast.forecastday[2].date}</p>
            </div>
            <p>Sunrise: </p>
            <p>{history.forecast.forecastday[2].astro.sunrise}</p>
            <p>Sunset: </p>
            <p>{history.forecast.forecastday[2].astro.sunset}</p>
            <p>Moonrise: </p>
            <p>{history.forecast.forecastday[2].astro.moonrise}</p>
            <p>Moonset: </p>
            <p>{history.forecast.forecastday[2].astro.moonset}</p>
          </div>
          <div className="box">
            <div
              style={{ fontSize: "25px", color: "lightblue", padding: "4px" }}
            >
              <p>Date:</p>
              <p>{history.forecast.forecastday[3].date}</p>
            </div>
            <p>Sunrise: </p>
            <p>{history.forecast.forecastday[3].astro.sunrise}</p>
            <p>Sunset: </p>
            <p>{history.forecast.forecastday[3].astro.sunset}</p>
            <p>Moonrise: </p>
            <p>{history.forecast.forecastday[3].astro.moonrise}</p>
            <p>Moonset: </p>
            <p>{history.forecast.forecastday[3].astro.moonset}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
