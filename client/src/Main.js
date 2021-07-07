import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Home/index";
import Recipe from "./Recipe/index";
import RecipeForm from "./RecipeForm/index";

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
          <Route
            exact
            path="/recipes/new/"
            render={props => (
              <RecipeForm recipes={this.props.value} {...props} />
            )}
          />
          <Route
            exact
            path="/recipes/:id/edit"
            render={props => (
              <RecipeForm recipes={this.props.value} {...props} />
            )}
          />
          <Route
            exact
            path="/recipes/:id"
            render={props => <Recipe recipes={this.props.value} {...props} />}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
