import React, { useState } from "react";
import axios from "axios";
import "./History.css";
import DatePicker from "react-date-picker";
import dateFormat from "dateformat";

const History = () => {
  const [search, setSearch] = useState("");
  const [firstDay, setFirstDay] = useState(new Date());
  const [lastDay, setLastDay] = useState(new Date());
  const [history, setHist] = useState("");

  let startdate = dateFormat(firstDay, "yyyy-mm-dd");
  let enddate = dateFormat(lastDay, "yyyy-mm-dd");

  const formSubmitHandler = () => {
    if (startdate <= enddate && search !== "") {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/history.json",
        params: {
          q: `${search}`,
          dt: `${startdate}`,
          lang: "en",
          end_dt: `${enddate}`,
        },
        headers: {
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com/",
          "x-rapidapi-key":
            "dce017b63amsh899dd275df6f25fp11e757jsn2c5888d8d395",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data.forecast.forecastday);
          setHist(response.data.forecast.forecastday);
        })
        .catch(function (error) {
          // console.error(error);
        });
    } else {
      alert("Please enter valid date/city");
    }
  };
  return (
    <div className="mainHistory" align="center">
      <div>
        <form className="historyform">
          <input
            type="text"
            className="input23"
            placeholder="Enter city name"
            onChange={(event) => setSearch(event.target.value)}
          />
          <DatePicker
            className="inputcomman"
            onChange={setFirstDay}
            value={firstDay}
          />
          <DatePicker
            className="inputcomman"
            onChange={setLastDay}
            value={lastDay}
          />
          <button type="button" className="button" onClick={formSubmitHandler}>
            Submit
          </button>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {history.length !== 0 &&
          history.map((test, index) => (
            <div key={index} className="historyapibox">
              <h3>Date: {test.date}</h3>
              <p>Sunrise: {test.astro.sunrise}</p>
              <p>Sunset: {test.astro.sunset}</p>
              <p>Moonrise: {test.astro.moonrise}</p>
              <p>Moonset: {test.astro.moonset}</p>
              <img src={test.day.condition.icon} alt="sun" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default History;
