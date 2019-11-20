import React, { Component } from 'react';
// import Module2 from './module02-components/module2';
// import Module3 from './module03-propsState/module3';
// import Module4 from './module04-list_conditionals/module4';
// import Module5 from './module05-http/module5'
import Module5Hooks from './module05-http-hooks/module5';
// import Module6 from './module06-adv_components/module6'
// import Module7 from './module07-routing/module7';
// import Module8 from './module08-forms/module8';
// import Module10 from './module10-react-redux/module10';
import './App.css';
// import Module10App from './module10-react-redux/module10-app';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Module2 /> */}
        {/* <Module3 /> */}
        {/* <Module4 /> */}
        {/* <Module5 /> */}
        {/* <Module5 /> */}
        <Module5Hooks />
        {/* <Module6 />   */}
        {/* <Module7></Module7> */}
        {/* <Module8></Module8> */}
        {/* <Module10App></Module10App> */}
      </div>
    );
  }

}

export default App;

