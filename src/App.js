//---------------------------------------
//CONFIG
//---------------------------------------
import React from "react";
import "./App.css";
import "./styles/scss/main.scss";
import { Switch, Route, Redirect } from "react-router-dom";
//---------------------------------------
//PAGES
//---------------------------------------
import PageAbout from "./Pages/About";
import PageHome from "./Pages/Home";
import PageMainMap from "./Pages/MainMap";
import PageQualityInfos from "./Pages/QualityInfos";

// getMyPosition = () => (

// )

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" />
      <h1>Hello this is Refill</h1> */}
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={PageHome} />
        <Route path="/about" component={PageAbout} />
        <Route path="/main-map" component={PageMainMap} />
        <Route path="/quality-info" component={PageQualityInfos} />
      </Switch>
    </div>
  );
}

export default App;
