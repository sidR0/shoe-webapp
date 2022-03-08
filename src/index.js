import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var state = {
  isSneakersChecked: false,
  isFlipFlopChecked: false,
  isFormalChecked: false,
  isAllChecked: false,
  maxPrice: 1000,
  selectedSize: [],
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function giveArrayRange(start, end, except) {
  let array = [];
  if (!except) {
    except = [];
  }
  for (let i = start; i <= end; i++) {
    array.push(i);
  }

  return array.filter((item) => !except.includes(item));
};

export default state;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
