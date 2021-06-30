import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";




function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/about">
              <Register />
            </Route>
            <Route path="/users">
              <Login />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App
