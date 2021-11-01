import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";

//ROUTES
import Home from "./components/Home";
import Games from "./components/Games";
import Websites from "./components/Websites";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/games" component={Games} />
          <Route path="/websites" component={Websites} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
