import React, { Component } from 'react';
import Module2 from './module02-components/module2';
import Module3 from './module03-propsState/module3';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Module2 /> */}
        <Module3 />
      </div>
    );
  }

}

export default App;