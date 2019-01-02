import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Home/index";

class Main extends Component {
  render() {
    //console.log()

    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home value={this.props.value} />}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
