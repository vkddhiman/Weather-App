import React from "react";
import "./Api.css";
import { useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";
import History from "./History";
import Forecast from "./Forecast";
import Current from "./Current";
import { Carousel } from "react-bootstrap";
import logo from "./photo.jpg";

const Api = () => {
  const [search, setSearch] = useState("");
  const [history, setHist] = useState("");
  const [forcast, setForcast] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let d = new Date();
    let enddate = dateFormat(d, "yyyy-mm-dd");
    let startdate = dateFormat(
      new Date().setDate(d.getDate() - 4),
      "yyyy-mm-dd"
    );

    if (search !== "") {
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
          // console.log(response.data);
          setHist(response.data);
        })
        .catch(function (error) {
          // console.error(error);
        });
      setSearch("");

      const options1 = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: { q: `${search}`, days: "3" },
        headers: {
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com/",
          "x-rapidapi-key":
            "dce017b63amsh899dd275df6f25fp11e757jsn2c5888d8d395",
        },
      };

      axios
        .request(options1)
        .then(function (response) {
          // console.log(response.data);
          setForcast(response.data);
        })
        .catch(function (error) {
          // console.error(error);
        });
      setSearch("");
    } else {
      alert("Please enter valid City");
    }
  };

  return (
    <div className="main" align="center">
      <form className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter city name"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="button" className="button" onClick={formSubmitHandler}>
          Submit
        </button>
      </form>

      <div className="current">
        <Current forcast={forcast} />
        <div className="details">
          <History history={history} />
          <Forecast forcast={forcast} />
        </div>
      </div>
    </div>
  );
};

export default Api;
