import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Switch>
        <Route path="/" />
      </Switch>
    </div>
  );
}

export default App;
