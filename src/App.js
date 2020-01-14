import React from "react";
import "./App.css";
import GetData from "./components/GetData";
import Search from "./components/Search";
import Login from "./containers/Login";
// import Maps from "./components/Maps";
import AutoComplete from './components/AutoSuggest';
import NavBar from './components/NavBar';
import NoMatch from "./components/NoMatch";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AutoSuggest from "./components/AutoSuggest";

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
