import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomeV from "../pages/HomeV";
import About from "../pages/About";
import NotFound from "../components/NotFound"

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={HomeV} />

        <Route to="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
