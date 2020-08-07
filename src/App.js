import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact to="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
