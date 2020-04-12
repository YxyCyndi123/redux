import {combineReducers} from 'redux';

import counter from './counter';
import list from './list';
import book from './books'

const Reducer = combineReducers({
    counter,
    list,
    book
});

export default Reducer;