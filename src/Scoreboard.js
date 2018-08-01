import React, { Component } from "react";
import "./Scoreboard.css";

class Scoreboard extends Component {
  render() {
    const score = this.props.score;
    const totalQuestions = this.props.totalQuestions;

    return (
      <h2 className="score">
        You guessed {` `}
        <span id="scoreNumber"> &nbsp;{score} </span>
        &nbsp;out of <span id="scoreNumber">
          &nbsp;{totalQuestions}{" "}
        </span>&nbsp;flags
      </h2>
    );
  }
}

export default Scoreboard;
