import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The waether in ${response.data.name} is ${response.data.main.temp} ºC`
    );
  }
  let apiKey = "c6da6d296757d783639131d01c953a9f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h1>The current temperature in Oslo is 6ºC.</h1>
      <p>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </p>
    </div>
  );
}
