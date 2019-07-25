//---------------------------------------
//CONFIG
//---------------------------------------
import React from "react";
import "./App.css";
import "./styles/scss/main.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
//---------------------------------------
//PAGES
//---------------------------------------
import PageHome from "./pages/Home";
import PageMainMap from "./pages/MainMap";
import PageQualityInfos from "./pages/QualityInfos";
import CheckContributions from "./pages/CheckContributions";
import Auth from "./pages/Auth";
import AllFountains from "./pages/Fountains";

import Page404 from "./pages/Page404";
import PlasticPrint from "./pages/PlasticPrint";

//---------------------------------------
//COMPONENTS
//---------------------------------------
import EditForm from "./components/forms/EditForm";
import CreateForm from "./components/forms/CreateForm";
import ContributeForm from "./components/forms/ContributeForm";
import ContactForm from "./components/forms/ContactForm";
import LoginForm from "./components/forms/LoginForm";
import SignupForm from "./components/forms/SignupForm";

//---------------------------------------
//FONTAWESOME
//---------------------------------------
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrash,
  faTimes,
  faEdit,
  faBars,
  faMousePointer,
  faPlus,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faEdit,
  faTrash,
  faTimes,
  faMousePointer,
  faPlus,
  faChevronUp
);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" />
      <h1>Hello this is Refill</h1> */}
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={PageHome} />
        <Route path="/main-map" component={PageMainMap} />
        <Route path="/quality-info" component={PageQualityInfos} />
        <Route path="/edit-fountain/:id" component={EditForm} />
        <Route path="/create-fountain" component={CreateForm} />
        <Route path="/check-contributions" component={CheckContributions} />
        <Route path="/fountains" component={AllFountains} />
        <Route path="/contribute" component={ContributeForm} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/admin" component={Auth} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/your-plastic-print" component={PlasticPrint} />
        <Route
          path="/instagram"
          component={() => {
            window.location =
              "https://www.google.com/url?q=https://www.instagram.com/refill_paris/?hl%3Dfr&sa=D&source=hangouts&ust=1563794659196000&usg=AFQjCNGjgeFQuYgJEc_Zxf6mzq3PSRoZaQ";
            return null;
          }}
        />
        {/* Below, protected route /fountains : (user must be signedin in backend ) */}
        <ProtectedRoute path="/fountains" component={AllFountains} />
        {/* The 404 route must always be the last one */}
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
