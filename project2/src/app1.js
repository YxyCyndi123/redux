
import React from 'react';
// import {createStore} from 'redux';
import store from './store';

import './App.css';

import List from './componets/list';
import Counter from './componets/counter';
import Book from './componets/books'

// import Reducer from './reducers';
// const store  = createStore(Reducer);

// console.log(store.getState());

function App() {
  return (
    <div className="App">
      <Counter 
        value= {store.getState().counter}
        onAdd = { ()=> store.dispatch({type: 'add'}) }
        onSub = { ()=> store.dispatch({type: 'sub'}) }
      />
     <List 
        store = {store}     
      />
      <Book store= {store}/>
    </div>
  );
}

export default App;

