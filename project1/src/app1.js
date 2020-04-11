
import React from 'react';
//example 1

import { createStore } from 'redux';
import Counter from './componets/counter';

import counter from './reducers/index';

import './App.css';


const store = createStore(counter);
console.log(store);

function App() {
  return (
    <div className="App">
      <Counter 
        value= {store.getState()}
        onAdd = { ()=> store.dispatch({type: 'add'}) }
        onSub = { ()=> store.dispatch({type: 'sub'}) }
      />
    </div>
  );
}

export { App, store };

