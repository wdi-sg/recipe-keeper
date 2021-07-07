import React, { Component } from "react";
import RecipeCard from "./recipe-card";

class Home extends Component {
  render() {
    console.log(this.props.value[0]);
    if (this.props.value.length > 0) {
      return (
        <div className="container-fluid">
          <div className="row">
            {this.props.value.map(item => {
              return <RecipeCard key={item.name} value={item} />;
            })}
          </div>
        </div>
      );
    } else return <div>nothing yet</div>;
  }
}

export default Home;
