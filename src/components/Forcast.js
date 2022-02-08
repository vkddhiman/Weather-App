import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-date-picker";
import "./Forcast.css";
import dateFormat from "dateformat";

const Forcast = () => {
  const [search, setSearch] = useState("");
  const [value, onChange] = useState(new Date());
  const [forcast, setForcast] = useState("");

  const formSubmitHandler = () => {
    if (search !== "") {
      let startdate = dateFormat(value, "yyyy-mm-dd");
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: { q: `${search}`, days: "3", dt: `${startdate}` },
        headers: {
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com/",
          "x-rapidapi-key":
            "dce017b63amsh899dd275df6f25fp11e757jsn2c5888d8d395",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setForcast(response.data.forecast.forecastday);
        })
        .catch(function (error) {
          // console.error(error);
        });
    } else {
      alert("Please enter valid city");
    }
  };

  return (
    <div align="center">
      <input
        type="text"
        className="inputFor"
        placeholder="Enter city name"
        onChange={(event) => setSearch(event.target.value)}
      />
      <DatePicker onChange={onChange} value={value} className="inputcomman" />
      <button className="buttonFor" onClick={formSubmitHandler}>
        Submit
      </button>
      {forcast.length !== 0 &&
        forcast.map((forData, index) => (
          <div key={index} className="forcastboxapi">
            <h3>Date: {forData.date}</h3>
            <p>Sunrise: {forData.astro.sunrise}</p>
            <p>Sunset: {forData.astro.sunset}</p>
            <p>Moonrise: {forData.astro.moonrise}</p>
            <p>Moonset: {forData.astro.moonset}</p>
            <p>MaxTemp: {forData.day.maxtemp_c}</p>
            <p>MinTemp: {forData.day.mintemp_c}</p>
            <p>Condition: {forData.day.condition.text}</p>
            <p>
              <img src={forData.day.condition.icon} alt="sunny" />
            </p>
          </div>
        ))}
    </div>
  );
};

export default Forcast;
