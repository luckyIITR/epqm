import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Poster from "./components/Poster";
import Map from "./components/Map";

import Committee from "./components/Committee";
import Speakers from "./components/Speakers";
import Programs from "./components/Programs";
import Papersubmission from "./components/Papersubmission";
import Sponsors from "./components/Sponsors";
import Scope from "./components/Scope";
import Dates from "./components/Dates";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/committee" component={Committee} />
        <Route exact path="/speakers" component={Speakers} />
        <Route exact path="/programs" component={Programs} />
        <Route exact path="/papersubmission" component={Papersubmission} />
        <Route exact path="/sponsors" component={Sponsors} />
        <Route exact path="/scope" component={Scope} />
        <Route exact path="/dates" component={Dates} />
        <Route exact path="/poster" component={Poster} />
        <Route exact path="/map" component={Map} />
      </Switch>
    </HashRouter>
  );
}

export default App;
