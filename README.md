# WORKSHOP REACTJS

#### Author: Vinh Hoang

#### Date : TBD

## Agenda

- [x] Tổng quan về Reactjs
- [ ] Tổng quan về React Weather App
- [x] Setup môi trường phát triển
- [ ] Hello World App
- [ ] Xây dựng các components:
  - [ ] Navbar
  - [ ] About
  - [ ] Home
  - [ ] Weather
- [ ] Fetch Weather API
- [ ] Deploy lên netlify

### Tổng quan về React

#### Some slides

[React Overview](http://coenraets.org/present/react)

#### JSX trong React

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

```
    React.createElement(
      MyButton,
      {color: 'blue', shadowSize: 2},
      'Click Me'
    )
```

MORE:

[JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)

[Getting Started with React and JSX](https://www.sitepoint.com/getting-started-react-jsx/)

### Tổng quan về React Weather App

TBD

### Setup môi trường phát triển

#### Cài đặt Nodejs và npm

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

#### Cài đặt Visual Studio Code

Cài đặt VS Code thông qua Ubuntu Software

#### Cài đặt các extensions cần thiêt

Mở phần Extensions trong Visual Studio Code, tìm và cài các extensions sau:

- ES7 React/Redux/GraphQL
- Prettier - Code formatter
- Bracket Pair Colorizer

Thêm các congif trong file `settings.json` như sau:

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

### Xây dựng các components

#### Navbar

TBD

#### About

TBD

#### Home

TBD

#### Weather

TBD

### Fetch Weather API

TBD

### Deploy lên netlify

TBD
