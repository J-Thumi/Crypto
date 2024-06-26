import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './app/store';
import { BrowserRouter as Router} from 'react-router-dom';
ReactDom.render(
<Router>
    <Provider store={store}>
    <App />
    </Provider>

    </Router>
,document.getElementById('root'));