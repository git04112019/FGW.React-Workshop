# WORKSHOP REACTJS

### Author: Vinh Hoang

### Date : TBD

## Agenda

- [x] Tổng quan về Reactjs
- [x] Tổng quan về React Weather App
- [x] Setup môi trường phát triển
- [x] Hello World App
- [x] Xây dựng các components:
  - [x] Navbar component
  - [x] About component
  - [x] Home component
  - [x] Weather component
  - [x] Fetch Weather API
- [ ] Todo
  - [ ] Deploy lên netlify
  - [ ] Xử lý các trường hợp đặt biệt
  - [ ] Thêm các UI như spinner, alert

### Tổng quan về React

### Some slides

[React Overview](http://coenraets.org/present/react)

### JSX trong React

ReactJS là một thư viện JavaScript được phát triển bởi Facebook nhằm xây dựng giao diện người dùng(UI).

JSX là một phần quan trọng trong ReactJS. JSX giống như một syntax extension giúp code trở lên dễ mượt và dễ đọc hơn.

JSX = Javascript + XML. Nó transform cú pháp dạng gần như XML về thành Javascript. Giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript. Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement.

Cú pháp để sử dụng JSX khá đơn giản:

```jsx
<JSXName JSXAttributes>....</JSXName>
```

Khi khai báo 1 cú pháp JSX như sau:

```jsx
<MyButton color='blue' shadowSize={2}>
  Click Me
</MyButton>
```

Nó sẽ được compile sang JS như sau:

```js
React.createElement(MyButton, { color: 'blue', shadowSize: 2 }, 'Click Me');
```

MORE:

[JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)

[Getting Started with React and JSX](https://www.sitepoint.com/getting-started-react-jsx/)

### Tổng quan về React Weather App

- Single page app
- Sử dụng Open Weather APi

![](weather-app.gif)

### Setup môi trường phát triển

### Cài đặt Nodejs và npm

Tại Ubuntu 18.04, mở Terminal và dùng câu lệnh sau để cài đặt

```
sudo apt update
sudo apt install nodejs
```

Dùng câu lệnh sau để kiểm tra:

```
nodejs --version
```

```
Output:
v8.10.0
```

### Cài đặt Visual Studio Code

Cài đặt VS Code thông qua Ubuntu Software

// Thêm hình ảnh VS Code

### Cài đặt các extensions cần thiêt

Mở phần Extensions trong Visual Studio Code, tìm và cài các extensions sau:

- ES7 React/Redux/GraphQL
- Prettier - Code formatter
- Bracket Pair Colorizer

Thêm các config trong file `settings.json` như sau:

```json
{
  "editor.formatOnSave": true,
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

### Hello World App

Trước tiên, cài package `create-react-app` mức global từ npm .

```
npm install create-react-app -g
```

Dùng lệnh sau để khởi tạo project và launch app server

```
npx create-react-app react-weather-app
cd react-weather-app
npm start
```

Remove các file không cần thiết: `serviceWorker.js`, `index.css`, `App.test.js`, `logo.svg`

Lưu ý remove các components không cần thiết trong file `index.js`

Thay thế code trong `App.js` bằng code sau:

```js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```

MORE:

[create-react-app](https://github.com/facebook/create-react-app)

---

### Xây dựng các components

### Navbar component

Tạo folder `components` để chứa tất cả các components của App

Inclue style trong file [`App.css`](/react-weather-app/src/App.css)

Cài đặt package `react-router-dom` từ npm

```
npm i react-router-dom
```

Tạo file `Navbar.js` và thêm code sau để tạo Navbar cho App

```js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fas fa-cloud-meatball' /> Weather App
      </h1>
      <ul>
        {/* Use Route to Router the page */}
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/todo'>Todo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
```

Include component Navbar vào file `App.js`

```js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
```

---

#### About component

Xây dựng component `About` với code sau

```js
import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <h1>About This App</h1>
      <p>Weather App</p>
      <p>Version: 1.0</p>
    </div>
  );
};

export default About;
```

Modify file `App.js` để Route component `About`

```js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
```

---

#### Home component

Tạo Component `Home`, là main page của App

```js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
```

Modify file `App.js` để include và Route đến `Home` component

```js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
```

### Xây dựng HTML Form

Xây dựng HTML form để nhận input từ người dùng

```js
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
  <input type='submit' value='Search' className='btn btn-dark btn-block' />
</form>
```

Import `{useState}` để dùng React Hooks

```
import React, { useState, useEffect } from 'react';
```

Khai báo các state cần dùng trong App

```js
const [city, setCity] = useState('');
const [country, setCountry] = useState('');
```

### Handle input từ người dùng

Handle input từ người dùng thông qua update các state `city`, và `country` bằng function `updateCity()` và `updateCountry()`

```js
const updateCity = e => {
  setCity(e.target.value);
};

const updateCountry = e => {
  setCountry(e.target.value);
};
```

Sau khi đã update input của người dùng qua 2 state `city` và `country`, define function `onSubmit()`

```js
  const onSubmit = e => {
    e.preventDefault();
      console.log(`city: ${city}, country: ${country}`)
      setCity('');
      setCountry('');
    }
  };
```

### Fetch Weather API

Sử dụng [Open Weather APi](https://openweathermap.org/current) để get data

Update function `onSubmit` để chuẩn bị query submit lên APi

```js
const onSubmit = e => {
  e.preventDefault();
  setQuery(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=b37e79b94f3aa3f2c52e9b55ec987462`
  );
  setCity('');
  setCountry('');
};
```

Tạo state `query` và `weatherInfo` để handle query lên APi và store data từ APi trả về

```js
const [query, setQuery] = useState('');
const [weatherInfo, setWeatherInfo] = useState({
  humidity: '',
  pressure: '',
  temp: '',
  temp_max: '',
  temp_min: ''
});
```

Define function `getWeatherInfo()` để fetch data từ APi

```js
const getWeatherInfo = async () => {
  if (query === '') {
  } else {
    const api_call = await fetch(query);
    const response = await api_call.json();
    console.log(response);
    setWeatherInfo(response.main);
  }
};
```

Sử dụng `useEffect()` để handle lệnh call APi

```js
useEffect(() => {
  getWeatherInfo();
  // eslint-disable-next-line
}, [query]);
```

Hiển thị data sau khi nhận response trả về từ APi

```js
<ul>
  <li>Humidity: {weatherInfo.humidity}</li>
  <li>Pressure: {weatherInfo.pressure}</li>
  <li>Temp: {weatherInfo.temp}</li>
  <li>Temp Max: {weatherInfo.temp_max}</li>
  <li>Temp Min: {weatherInfo.temp_min}</li>
</ul>
```

### Weather component

Xây dựng `Weather` component để hiện thị các data từ props được passed từ `Home` component

```js
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
```

Sử dụng `Weather` component trong `Home` component

```js
import Weather from './Weather';
```

```js
<Weather weatherInfo={weatherInfo} />
```

---

## TODO

- [ ] Deploy lên netlify
- [ ] Xử lý các trường hợp đặt biệt
- [ ] Thêm các UI như spinner, alert

---

## END
