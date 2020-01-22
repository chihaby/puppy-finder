import React from "react";
import "./App.css";
import Main from "./components/Main";
import Search from "./components/Search";
import Login from "./containers/Login";
import Maps from "./components/Maps";
import { AutoSuggest } from "./components/AutoSuggest";
import NavBar from "./components/NavBar";
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
                        <Route exact path="/" component={Main} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/map" component={Maps} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/auto" exact component={AutoSuggest} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
