import React, { Component } from "react";
import "./Flag.css";

class Flag extends Component {
  render() {
    const flag = this.props.flag;
    const alt = this.props.name;

    return <img className="flag" src={flag} alt={alt} />;
  }
}

export default Flag;
