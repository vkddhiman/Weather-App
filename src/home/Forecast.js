import React from "react";
import "./Forecast.css";

const Forecast = ({ forcast }) => {
  return (
    <div>
      {!forcast ? (
        <p></p>
      ) : (
        <div className="forecastDate">
          <div className="boxx">
            <div
              style={{ fontSize: "25px", color: "lightblue", padding: "12px" }}
            >
              <p>Date:</p>
              <p> {forcast.forecast.forecastday[1].date}</p>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                marginBottom: "40px",
              }}
            >
              <div style={{ height: "60px", width: "150px" }}>
                <p>Sunrise:</p>
                <p> {forcast.forecast.forecastday[1].astro.sunrise}</p>
              </div>
              <div style={{ height: "60px", width: "150px" }}>
                <p>Sunset:</p>
                <p> {forcast.forecast.forecastday[1].astro.sunset}</p>
              </div>
              <div style={{ height: "60px", width: "150px" }}>
                <p>Moonrise:</p>
                <p> {forcast.forecast.forecastday[1].astro.moonrise}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                marginBottom: "40px",
              }}
            >
              <div style={{ height: "60px", width: "150px" }}>
                <p>Moonset:</p>
                <p> {forcast.forecast.forecastday[1].astro.moonset}</p>
              </div>
              <div style={{ height: "60px", width: "150px" }}>
                <p>MaxTemp:</p>
                <p> {forcast.forecast.forecastday[1].day.maxtemp_c}</p>
              </div>
              <div style={{ height: "60px", width: "150px" }}>
                <p>MinTemp:</p>
                <p> {forcast.forecast.forecastday[1].day.mintemp_c}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                marginBottom: "40px",
                justifyContent: "center",
              }}
            >
              <div style={{ height: "60px", width: "250px" }}>
                <p>Condition:</p>
                <p> {forcast.forecast.forecastday[1].day.condition.text}</p>
              </div>
              <div style={{ height: "60px", width: "150px" }}>
                <p>
                  <img
                    src={forcast.forecast.forecastday[1].day.condition.icon}
                    alt="sunny"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="boxx">
            <div
              style={{ fontSize: "25px", color: "lightblue", padding: "12px" }}
            >
              <p>Date:</p>
              <p> {forcast.forecast.forecastday[2].date}</p>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                marginBottom: "40px",
              }}
            >
              <div style={{ height: "60px", width: "150px" }}>
                <p>Sunrise:</p>
                <p> {forcast.forecast.forecastday[2].astro.sunrise}</p>
              </div>
              <div style={{ height: "60px", width: "150px" }}>
                <p>Sunset:</p>
                <p> {forcast.forecast.forecastday[2].astro.sunset}</p>
              </div>
              <div style={{ height: "60px", width: "150px" }}>
                <p>Moonrise:</p>
                <p> {forcast.forecast.forecastday[2].astro.moonrise}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                marginBottom: "40px",
              }}
            >
              <div style={{ height: "60px", width: "150px" }}>
                <p>Moonset:</p>
                <p> {forcast.forecast.forecastday[2].astro.moonset}</p>
              </div>
              <div style={{ height: "60px", width: "150px" }}>
                <p>MaxTemp:</p>
                <p> {forcast.forecast.forecastday[2].day.maxtemp_c}</p>
              </div>
              <div style={{ height: "60px", width: "150px" }}>
                <p>MinTemp:</p>
                <p> {forcast.forecast.forecastday[2].day.mintemp_c}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                marginBottom: "40px",
                justifyContent: "center",
              }}
            >
              <div style={{ height: "60px", width: "250px" }}>
                <p>Condition:</p>
                <p> {forcast.forecast.forecastday[2].day.condition.text}</p>
              </div>
              <div style={{ height: "60px", width: "150px" }}>
                <p>
                  <img
                    src={forcast.forecast.forecastday[2].day.condition.icon}
                    alt="sunny"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forecast;
