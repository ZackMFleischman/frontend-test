import 'babel-polyfill';
import es6Promise from 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createReduxStore } from './Store';

es6Promise.polyfill();

const reduxStore = createReduxStore();

ReactDOM.render(
    <Provider store={ reduxStore }>
        <App />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
