//1 when disabled change button colors to gray

import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import shuffle from "shuffle-array";
import Options from "./Options";
import Flag from "./Flag";
import Scoreboard from "./Scoreboard";
import Hint from "./Hint";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import SharingButtons from "./SharingButtons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      randomFourCountries: [],
      correctCountry: "",
      hasAnswered: null,
      isButtonDisabled: false,
      score: 0,
      totalQuestions: 0,
      hintRequested: 0
      // icons: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.onNext = this.onNext.bind(this);
    this.HandleClickHint = this.HandleClickHint.bind(this);
  }

  componentDidMount() {
    const countriesUrl = "https://restcountries.eu/rest/v2/all";

    const getCountries = () => {
      return fetch(countriesUrl)
        .then(data => data.json())
        .then(countries => {
          const randomFourCountries = shuffle(countries).slice(0, 4);
          const correctCountry =
            randomFourCountries[
              Math.floor(Math.random() * randomFourCountries.length)
            ];
          this.setState({
            countries,
            randomFourCountries,
            correctCountry
          });
        });
    };

    getCountries();
  }

  HandleClickHint() {
    this.setState(prevState => {
      return { hintRequested: prevState.hintRequested + 1 };
    });

    // console.log("clicked");
  }

  ///
  handleClick(e) {
    this.state.correctCountry.name === e.target.innerHTML
      ? this.setState({ hasAnswered: true })
      : this.setState({ hasAnswered: false });

    // console.log(e.target.className); //: "options-button "
    // const correctBtnClasses = "options-button gr";

    this.setState({ isButtonDisabled: true });
    this.setState({ totalQuestions: this.state.totalQuestions + 1 });
    // this.setState({
    //   icons: '<i class="fa fa-smile-o" aria-hidden="true"></i>'
    // });

    // this.setState({ score: ++1 });

    if (this.state.correctCountry.name === e.target.innerHTML)
      this.setState(prevState => {
        return { score: prevState.score + 1 };
      });
    // }
  }

  ///
  onNext() {
    const randomFourCountries = shuffle(this.state.countries).slice(0, 4);
    const correctCountry =
      randomFourCountries[
        Math.floor(Math.random() * randomFourCountries.length)
      ];
    const hasAnswered = null;

    this.setState({
      randomFourCountries: randomFourCountries,
      correctCountry: correctCountry,
      hasAnswered: hasAnswered,
      isButtonDisabled: false,
      hintRequested: 0
    });

    // this.setState(prevState => ({
    //   hideHint: !prevState.hideHint
    // }));
  }

  render() {
    let gameView = <p id="loading">Loading...</p>;

    const {
      correctCountry,
      isButtonDisabled,
      score,
      totalQuestions
    } = this.state;

    // const btnsClasses = "options-button ";

    const Message = hasAnswered => {
      if (hasAnswered) {
        return (
          <h3 className="Message">
            <i className="fa fa-smile-o fa-2x" aria-hidden="true" />&nbsp;Correct!
            <button onClick={this.onNext} id="btn-next">
              NEXT &nbsp;<i
                className="fa fa-chevron-right"
                aria-hidden="true"
              />
            </button>
          </h3>
        );
      } else if (hasAnswered === false) {
        return (
          <h3 className="Message">
            <i className="fa fa-frown-o fa-2x" aria-hidden="true" />&nbsp;
            Incorrect, the correct answer is {this.state.correctCountry.name}
            <button onClick={this.onNext} id="btn-next">
              <div id="nextBtnContent">
                NEXT &nbsp;
                <i className="fa fa-chevron-right" aria-hidden="true" />
              </div>
            </button>
          </h3>
        );
      } else if (hasAnswered == null) {
        return <h3 className="Message">Which country's flag is this?</h3>;
      }
    };

    gameView = (
      <div className="App">
        {this.state.randomFourCountries.map(country => (
          <Options
            key={country.numericCode}
            name={country.name}
            correctCountry={correctCountry.name}
            handleClick={this.handleClick}
            isButtonDisabled={isButtonDisabled}
          />
        ))}
        {Message(this.state.hasAnswered)}
        <Flag flag={correctCountry.flag} alt={correctCountry.name} />
        {/* <SharingButtons /> */}
      </div>
    );

    // let classes = "options-button ";
    // classes += isButtonDisabled ? "btn-disabled button-correct-answer" : "";

    return (
      <div>
        {gameView}
        <Hint
          correctCountry={correctCountry}
          hintRequested={this.state.hintRequested}
          HandleClickHint={this.HandleClickHint}
        />
        <Scoreboard score={score} totalQuestions={totalQuestions} />
        <SharingButtons />
        <p className="copyright">© 2018 Qusay Sabri. All rights reserved.</p>
      </div>
    );
  }
}

export default App;
