

//list
import { counterInit } from './initState';
import { add } from './initfn';




//方式2： 见一个createReducer - 
import createReducer  from '../createReducer';
let book = createReducer(counterInit, {'bookAdd': add });

export default book;



