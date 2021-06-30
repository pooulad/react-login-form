import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";




function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App
