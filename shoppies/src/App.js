import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Nominations } from "./components/Nominations";
import { Search } from "./components/Search";
import "./App.css";

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
      <Header />

      <Switch> 
        <Route exact path="/">
          <Nominations />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;
