
import React from 'react';
import {createStore} from 'redux';

import './App.css';

import List from './componets/list';
import Counter from './componets/counter';

import Reducer from './reducers';

const store  = createStore(Reducer);

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
    </div>
  );
}

export {App, store};








// import React from 'react';
// //example 1
// // import { createStore } from 'redux';

// import './App.css';

// //combinereducer已解决
// // import list from './reducers/list';
// // import counter from './reducers/counter';


// import List from './componets/list';
// import Counter from './componets/counter';
// import Book from './componets/books';

// // import Reducer from './reducers';

// // const store = createStore(list);
// // const store  = createStore(Reducer);
// // console.log(store.getState());

// import store from './store';

// function App() {
//   return (
//     <div className="App">
//      <List 
//         store = {store}
//       />
//       {/* <hr />
//       <Book /> */} */}
//     </div>
//   );
// }

// export default App;