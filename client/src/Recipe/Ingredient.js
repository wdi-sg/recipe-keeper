import React, { Component } from "react";

class Ingredient extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.value.name}</h5>
          <p className="card-text">
          {this.props.value.amount}
          </p>
        </div>
      </div>
    );
  }
}

export default Ingredient;
