//1 when disabled change button colors to gray
import { Helmet } from 'react-helmet';
import React, { Component } from 'react';
// import logo from "./logo.svg";
import './App.css';
import shuffle from 'shuffle-array';
import Options from './Options';
import Flag from './Flag';
import Scoreboard from './Scoreboard';
import Hint from './Hint';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import SharingButtons from './SharingButtons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      randomFourCountries: [],
      correctCountry: '',
      hasAnswered: null,
      isButtonDisabled: false,
      score: 0,
      totalQuestions: 0,
      hintRequested: 0,
      selectedButton: 0
      // icons: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.onNext = this.onNext.bind(this);
    this.HandleClickHint = this.HandleClickHint.bind(this);
  }

  componentDidMount() {
    const countriesUrl = 'https://restcountries.eu/rest/v2/all';

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
      return { hintRequested: prevState.hintRequested + 3 };
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

    //if (this.state.correctCountry.numericCode === e.target.value) {
    this.setState({ selectedButton: e.target.value });
    //}

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
      hintRequested: 0,
      selectedButton: 0
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
      totalQuestions,
      selectedButton
    } = this.state;

    // const btnsClasses = "options-button ";

    const Message = hasAnswered => {
      if (hasAnswered) {
        return (
          <h3 className="Message">
            <i className="fa fa-smile-o fa-2x" aria-hidden="true" />
            &nbsp;Correct!
            <button onClick={this.onNext} id="btn-next">
              Next &nbsp;
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </button>
          </h3>
        );
      } else if (hasAnswered === false) {
        return (
          <h3 className="Message">
            <i className="fa fa-frown-o fa-2x" aria-hidden="true" />
            &nbsp; Incorrect, the correct answer is{' '}
            {this.state.correctCountry.name}
            <button onClick={this.onNext} id="btn-next">
              <div id="nextBtnContent">
                Next &nbsp;
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
        <div className="flag-area">
          <Flag flag={correctCountry.flag} alt={correctCountry.name} />
        </div>
        {Message(this.state.hasAnswered)}
        <div className="options-area">
          {this.state.randomFourCountries.map(country => (
            <Options
              key={country.numericCode}
              value={country.numericCode}
              name={country.name}
              correctCountry={correctCountry.name}
              handleClick={this.handleClick}
              isButtonDisabled={isButtonDisabled}
              selectedButton={selectedButton}
            />
          ))}
        </div>
        {/* <SharingButtons /> */}
      </div>
    );

    // let classes = "options-button ";
    // classes += isButtonDisabled ? "btn-disabled button-correct-answer" : "";

    return (
      <div>
        <Helmet>
          {/* <title>{"Guess_The_Flag"}</title> */}
          {/* <meta name="description" content={"How Many Flags Do You Know?"} />
          <meta name="og:image" content={"/GuessTheFlag.png"} /> */}
          <meta
            property="og:url"
            content="https://qusay19.github.io/guess-countries-flags/"
          />
          <meta property="og:type" content="website" />
          <meta
            id="og-image"
            property="og:image"
            content="https://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
          />
          <meta property="og:title" content="Guess the Flag" />
          <meta
            property="og:description"
            content="How Many Flags Do You Know?"
          />
        </Helmet>
        {/* <meta property="og:image" content="public/imgs/GuessTheFlag.png"> */}
        <Scoreboard score={score} totalQuestions={totalQuestions} />
        {gameView}
        <Hint
          correctCountry={correctCountry}
          hintRequested={this.state.hintRequested}
          HandleClickHint={this.HandleClickHint}
        />
        {/* <h6>Share on</h6> */}
        <SharingButtons />
        <p className="copyright">© 2018 Qusai Sabri. All rights reserved.</p>
      </div>
    );
  }
}

export default App;
