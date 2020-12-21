import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SimpleMap from "./Mapa";
import Admin from "./pages/Admin";
import Prof from "./pages/Prof";
import Aluno from "./pages/Aluno";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/mapa" component={SimpleMap} />
      <Route path="/adm" component={Admin} />
      <Route path="/pf" component={Prof} />
      <Route path="/aln" component={Aluno} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// registerServiceWorker();
