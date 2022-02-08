import React, { useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const formSubmitHandler = () => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${search}` },
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "dce017b63amsh899dd275df6f25fp11e757jsn2c5888d8d395",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setLocation(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={formSubmitHandler} onSubmit={props.onClick}>
        Submit
      </button>
      {!location ? (
        <p>No Info Found!</p>
      ) : (
        <>
          <h2>City: {location.location.name}</h2>
          <h2>State: {location.location.region}</h2>
          <h2>Country: {location.location.country}</h2>
          <h2>Latitude: {location.location.lat}</h2>
          <h2>Longitude: {location.location.lon}</h2>
          <h2>Temperature:{location.current.temp_c}</h2>
          <h2>{location.current.condition.icon}</h2>
          <h2>RealFeels: {location.current.feelslike_c}</h2>
          <h2>Humidity: {location.current.humidity}</h2>
          <h2>Last Updated: {location.current.last_updated}</h2>
          <h2>Wind Speed: {location.current.wind_kph}</h2>
          <h2>Wind Direction: {location.current.wind_dir}</h2>
        </>
      )}
    </div>
  );
};

export default Search;
