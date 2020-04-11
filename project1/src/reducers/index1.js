
//initialize a reducer - 更改state
import { number } from './initState';

export default function counter(state = number, action) {
    if (action.type == 'add') {
        return state + 1;
    } else if (action.type == 'sub') {
        return state - 1;
    } else {
        return state;
    }
}