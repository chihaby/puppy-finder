import React from "react";
import "./App.css";
import Main from "./components/Main";
import NoMatch from "./components/NoMatch";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
