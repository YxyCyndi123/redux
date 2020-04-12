
//book - reucer
//list
//1.state - 初始值
import { counterInit } from './initState';
//2.fn - 操作
import { add } from './initfn';

import createReducer  from '../createReducer';

let book = createReducer(counterInit, {'bookAdd': add });

export default book;



