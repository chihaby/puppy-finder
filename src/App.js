import React from "react";
import "./App.css";
import GetData from "./components/GetData";
import Search from "./components/Search";
import Map from "./components/Map";
import NavBar from './components/NavBar';
import NoMatch from "./components/NoMatch";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavBar></NavBar>
                </div>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={GetData} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/map" component={Map} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
