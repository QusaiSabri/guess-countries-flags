import React, { Component } from 'react';
import './Hint.css';

class Hint extends Component {
  render() {
    const { capital } = this.props.correctCountry;
    const { population } = this.props.correctCountry;
    const { subregion } = this.props.correctCountry;
    const { hintRequested } = this.props;
    const hideHint = true; //this.props;

    //Sometimes the capital is an empty string (missing from Countries REST APIs)

    let hintView = hideHint => {
      if (hideHint === false) {
        return null;
      } else if (hideHint) {
        return (
          <div>
            <ul>
              {capital.length ? <li>The Capital is {capital}.</li> : null}
              {Number(population).toLocaleString().length ? (
                <li>
                  Has a population of {Number(population).toLocaleString()}.
                </li>
              ) : null}
              {subregion.length ? <li>Subregion: {subregion}.</li> : null}
            </ul>
          </div>
        );
      }
    };

    return (
      <div className="hint">
        {hintRequested >= 3 ? (
          <button disabled id="disabled">
            Hint?
          </button>
        ) : (
          <button onClick={this.props.HandleClickHint}>Hint?</button>
        )}

        {hintRequested > 0 ? hintView(hideHint) : null}
      </div>
    );
  }
}

export default Hint;
