import 'babel-polyfill';
import es6Promise from 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { rootReducer } from './reducers/RootReducer';
es6Promise.polyfill();

const reduxStore = createStore(rootReducer);

ReactDOM.render(
    <Provider store={ reduxStore }>
        <App />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
