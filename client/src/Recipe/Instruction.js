import React, { Component } from "react";

class Instruction extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <p className="card-title">{this.props.index}. {this.props.value}</p>

        </div>
      </div>
    );
  }
}

export default Instruction;
