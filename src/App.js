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
// import PageAbout from "./Pages/About";
import PageHome from "./pages/Home";
import PageMainMap from "./pages/MainMap";
import PageQualityInfos from "./pages/QualityInfos";
import Fountains from "./pages/Fountains";
import AdminForm from "./components/forms/AdminForm";
import ContributeForm from "./components/forms/ContributeForm";
import ContactForm from "./components/forms/ContactForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faEdit, faTrash);

// )

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" />
      <h1>Hello this is Refill</h1> */}
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={PageHome} />
        {/* <Route path="/about" component={PageAbout} /> */}
        <Route path="/main-map" component={PageMainMap} />
        <Route path="/quality-info" component={PageQualityInfos} />
        <Route path="/fountains" component={Fountains} />
        <Route path="/edit-fountain" component={AdminForm} />
        <Route path="/contribute" component={ContributeForm} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    </div>
  );
}

export default App;
