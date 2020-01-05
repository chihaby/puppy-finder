import React from "react";
import "./App.css";
import GetData from "./components/GetData";
import Search from "./components/Search";
import Map from "./components/Map";
import Dashboard from "./components/Dashboard";
import NoMatch from "./components/NoMatch";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/home" component={GetData} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/map" component={Map} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
