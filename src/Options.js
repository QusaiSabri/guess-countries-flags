import React, { Component } from "react";
import "./Options.css";

class Options extends Component {
  render() {
    const options = this.props.name;
    const disabled = this.props.isButtonDisabled;

    return (
      <button
        onClick={this.props.handleClick}
        disabled={disabled}
        className="options-button"
      >
        {options}
      </button>
    );
  }
}

export default Options;
