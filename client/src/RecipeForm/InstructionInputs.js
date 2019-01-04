import React, { Component } from "react";

class InstructionInputs extends Component {
  render() {
    return this.props.instructions.map((val, idx) => {
      let instructionId = `instruction-${idx}`;
      return (
        <div className="form-group" key={instructionId}>
          <label htmlFor={instructionId}>{`Step ${idx + 1}`}</label>
          <input
          defaultValue={val.instructionStep}
            type="text"
            name="instructionStep"
            data-id={idx}
            id={instructionId}
            className="form-control"
          />
        </div>
      );
    });
  }
}

export default InstructionInputs;
