import React, { Component } from 'react';
import './Options.css';

class Options extends Component {
  render() {
    const options = this.props.name;
    const disabled = this.props.isButtonDisabled;
    const value = this.props.value;
    const selectedButton = this.props.selectedButton;

    return (
      <button
        onClick={this.props.handleClick}
        disabled={disabled}
        className={
          'options-button ' + (selectedButton == value ? 'selectedButton' : '')
        }
        value={value}
      >
        {options}
      </button>
    );
  }
}

export default Options;
