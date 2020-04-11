
//操作index / indx2


//initialize a reducer - 更改state
import { counterInit } from './initState';//数据
import {add, remove } from './initfn';//事件
//数据与事件剥离出来

//方式3
import createReducer from './createReducer';

export default createReducer(counterInit, {'listAdd': add, 'listRemove': remove });



// export default function list(state = counterInit, action) {
    //方式1
    // if (action.type === 'listAdd') {
    //     return add(state, action);
    // } else if (action.type === 'listRemove') {
        
    //     return remove(state,action);
    // } else {
    //     return state;
    // }

    //方式2
    // switch(action.type) {
    //     case 'listAdd':
    //         return add(state, action);
    //         break
    //     case 'listRemove':
    //         return remove(state,action);
    //         break
    //     default:
    //         return state       
    // }

    //方式3:若type很多怎么办
    //采用 createReducer (init,) 自动生成reducer

    //
// }