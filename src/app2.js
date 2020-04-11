import React from 'react';
import {createStore} from 'redux';

import './App.css';

import List from './componets/list';
import list from './reducers/index';

const store  = createStore(list);

function App() {
  return (
    <div className="App">
     <List 
        store = {store}     
      />
    </div>
  );
}

export {App, store};