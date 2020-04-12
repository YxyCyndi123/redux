import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import store from './store';
// import store from './store';
import * as serviceWorker from './serviceWorker';

const render = () => (
    ReactDOM.render(<App />, document.getElementById('root'))
);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
store.subscribe(render);
