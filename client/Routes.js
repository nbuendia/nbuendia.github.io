import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";

//ROUTES
import Home from "./components/Home";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
