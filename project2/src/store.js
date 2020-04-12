//单拿出store 可以通用store

import { createStore } from 'redux';
import Reducer from './reducers';

const store = createStore(Reducer);

export default store;