import {combineReducers} from 'redux';

import counter from './counter';
import list from './list';

const Reducer = combineReducers({
    counter,
    list
});

export default Reducer;