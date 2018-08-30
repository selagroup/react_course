import React from 'react'
import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Module10 from './module10';


const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Module10App extends React.Component {

    render(){
       return <Provider store={store} >
            <Module10></Module10>
        </Provider>
    }
}


export default Module10App;