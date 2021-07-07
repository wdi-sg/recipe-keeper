//import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <Link
          to={{
            pathname: `/`
          }}
          className="btn btn-primary"
        >
          Home
        </Link>
        <Link
          to={{
            pathname: `/recipes/new`
          }}
          className="btn btn-primary"
        >
          Add Recipe
        </Link>
      </header>
    );
  }
}

export default Header;
