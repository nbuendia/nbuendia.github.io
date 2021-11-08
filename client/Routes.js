import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";

//ROUTES
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Games from "./components/Games";
import Websites from "./components/Websites";
import NotFound from "./components/NotFound";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/games" component={Games} />
          <Route path="/websites" component={Websites} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
