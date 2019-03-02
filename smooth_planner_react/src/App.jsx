import React, { Component } from 'react';
import './styles/App.css';
import CreateItinerary from './component_form_createtrip';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>Hello World</p>
        </header>
        <body>
        <CreateItinerary />
        </body>
      </div>
    );
  }
}

export default App;
