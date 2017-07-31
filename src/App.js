import React from 'react';
import {ReactInterval} from './MyInterval';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state =  {
      count: new Date().toLocaleTimeString()
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.state.count}
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
        <ReactInterval
          timeout={1000}
          enabled={true}
          callback={() => this.setState({count: new Date().toLocaleTimeString()})}
        />
      </div>
    );
  }
}

export default App;
