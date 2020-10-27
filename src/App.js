
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import "./App.css";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";

import reducer from "./redux/reducer";
import { createStore } from "redux";

import NavBar from "./components/NavBar";
import { Typography, Divider } from "@material-ui/core";

import AuthRoute from "./components/auth/AuthRoutes";

//import HomePage from "./pages/HomePage";
import LoginPage from "./components/Login/LoginPage";

import { appMiddleware } from "./Middleware/AppMiddleware";
import { apiMiddleware } from "./Middleware/ApiMiddleware";
import Dashboard from "./views/Dashboard/Dashboard";

const createStoreWithMiddleware = applyMiddleware(
  appMiddleware,
  apiMiddleware
)(createStore);


/**
 * 
 *  <AuthRoute path="/Dashboard" type="private">
              <Dashboard />
            </AuthRoute>
 */
const store = createStoreWithMiddleware(reducer);

const IndexPage = () => (
  <>
    <Typography variant="h3">Welcome to the App</Typography>
    <Divider style={{ marginTop: 10, marginBottom: 10 }} />
    <Typography variant="h6">Feel free to take a look around</Typography>
  </>
);

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <AuthRoute path="/home"  type="private" />
            <AuthRoute path="/login" render={LoginPage} type="guest">
              <LoginPage />
            </AuthRoute>
            
            <Route path="/" render={IndexPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}