import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux"
import { configureStore } from './store/configureStore';

const initalState = {}

const store = configureStore(initalState)

ReactDOM.render(
 <Provider store={store} >
   <BrowserRouter>
    <Routes/>
   </BrowserRouter>
 </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
