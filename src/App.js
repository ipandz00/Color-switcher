import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorContainer from './components/ColorContainer.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fieldText: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ColorContainer />
          <input type="text" name="fieldText" value={this.state.fieldText} onChange={this.handleInputChange} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
