import React from "react";
import "./App.css";
import GetData from "./components/GetData";
import Search from "./components/Search";
import Map from "./components/Map";
import NoMatch from "./components/NoMatch";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                        <li>
                            <Link to="/map">Map</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={GetData} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/map" component={Map} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
