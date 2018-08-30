import React from 'react'
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import Module10 from './module10';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware ))
);


class Module10App extends React.Component {

    render(){
       return <Provider store={store} >
            <Module10></Module10>
        </Provider>
    }
}


export default Module10App;