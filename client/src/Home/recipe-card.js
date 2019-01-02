import React, { Component } from "react";

class RecipeCard extends Component {
  render() {
      console.log(this.props.value)
      let item = this.props.value;
    return (<div className="card">
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <a href="#" className="btn btn-primary">See full recipe</a>
    </div>
  </div>);
  }
}
export default RecipeCard;
