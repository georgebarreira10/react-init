import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const, let ou var = declaraçao de variavel
//a variavel root recebe atraves da classe React.DOM com a chamada
//do metodo creatRoot, um elemento HTML, atraves da referencia documet.getElelementById('root)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
