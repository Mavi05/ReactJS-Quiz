import React, {Component} from 'react';
import logo from '../../logo.svg';
import './reactCard.css';

class reactCard extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <a href="/">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <p>
              <code>React Quiz </code>
            </p>
          </header>
        </div>
      </div>
    );
  }
}

export default reactCard;
