import React from 'react';

const Weather = ({
  weatherInfo: { humidity, pressure, temp, temp_max, temp_min }
}) => {
  return (
    <div>
      <ul>
        <li>Humidity: {humidity}</li>
        <li>Pressure: {pressure}</li>
        <li>Temp: {temp}</li>
        <li>Temp Max: {temp_max}</li>
        <li>Temp Min: {temp_min}</li>
      </ul>
    </div>
  );
};

export default Weather;
