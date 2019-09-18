import React, { useState, useEffect } from 'react';
import Weather from './Weather';

const Home = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [query, setQuery] = useState('');
  const [weatherInfo, setWeatherInfo] = useState({
    humidity: '',
    pressure: '',
    temp: '',
    temp_max: '',
    temp_min: ''
  });

  const updateCity = e => {
    setCity(e.target.value);
  };

  const updateCountry = e => {
    setCountry(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setQuery(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=b37e79b94f3aa3f2c52e9b55ec987462`
    );
    setCity('');
    setCountry('');
  };

  const getWeatherInfo = async () => {
    if (query === '') {
    } else {
      const api_call = await fetch(query);
      const response = await api_call.json();
      console.log(response);
      setWeatherInfo(response.main);
    }
  };

  useEffect(() => {
    getWeatherInfo();
    // eslint-disable-next-line
  }, [query]);

  return (
    <div className='container'>
      <form onSubmit={onSubmit} className='form' action=''>
        <input
          type='text'
          name='city'
          value={city}
          placeholder='City...'
          onChange={updateCity}
          required
        />
        <input
          type='text'
          name='country'
          value={country}
          placeholder='Country...'
          onChange={updateCountry}
          required
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      <br />
      <Weather weatherInfo={weatherInfo} />
    </div>
  );
};

export default Home;
