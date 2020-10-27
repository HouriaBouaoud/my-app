/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from 'components/Login/LoginPage'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();*/

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log('Example app listening on port ${port}!'));
*/
/**
 * I have planned to use the jsrsasign, as that’s the
 * closest to what my backend team generated, 
 * and it supports all the algorithms
 */
//const JSRSASign = require("jsrsasign");