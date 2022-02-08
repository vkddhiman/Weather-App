import React from "react";
import "./Current.css";

const Current = ({ forcast }) => {
  return (
    <div className="main">
      <div className="current">
        {!forcast ? (
          <p></p>
        ) : (
          <>
            <div className="currentbox">
              <h1>Today</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ height: "50px", width: "400px" }}>
                  <p>City: </p>
                  <p>{forcast.location.name}</p>
                </div>
                <div style={{ height: "50px", width: "400px" }}>
                  <p>State:</p>
                  <p>{forcast.location.region}</p>
                </div>
                <div style={{ height: "50px", width: "400px" }}>
                  <p>Country:</p>
                  <p>{forcast.location.country}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    height: "50px",
                    width: "800px",
                    fontSize: "bolder",
                    fontFamily:
                      '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
                  }}
                >
                  <p>Last Updated: </p>
                  <p> {forcast.current.last_updated}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ height: "50px", width: "400px" }}>
                  <p>Latitude: </p>
                  <p> {forcast.location.lat}</p>
                </div>
                <div style={{ height: "50px", width: "400px" }}>
                  <p>Longitude: </p>
                  <p> {forcast.location.lon}</p>
                </div>
                <div style={{ height: "50px", width: "400px" }}>
                  <p>Temperature:</p>
                  <p>{forcast.current.temp_c}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ height: "50px", width: "400px" }}>
                  <p>Humidity:</p>
                  <p> {forcast.current.humidity}</p>
                </div>
                <div style={{ height: "50px", width: "400px" }}>
                  <p>Wind Speed: </p>
                  <p>{forcast.current.wind_kph}</p>
                </div>
                <div style={{ height: "50px", width: "400px" }}>
                  <p>Wind Direction:</p>
                  <p> {forcast.current.wind_dir}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ height: "50px", width: "600px" }}>
                  <p>RealFeels: </p>
                  <p>{forcast.current.feelslike_c}</p>
                </div>
                <img src={forcast.current.condition.icon} alt="" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Current;
