import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import burgerBuildReducers from './Store/reducer/burgerBuild';
import orderReducers from './Store/reducer/order';
import authReducers from './Store/reducer/auth';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const rootReducers = combineReducers({
    BBR: burgerBuildReducers,
    OR: orderReducers,
    AR: authReducers,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // tool devtool cua redux
const storesss = createStore(rootReducers,composeEnhancers(applyMiddleware(thunk)));

const app =
    <Provider store={storesss}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>;
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
