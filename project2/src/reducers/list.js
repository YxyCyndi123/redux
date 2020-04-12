
//initialize a reducer - 更改state
import { counterInit } from './initState';//数据
import {add, remove } from './initfn';//事件
//数据与事件剥离出来

//方式3
import createReducer from './createReducer';

export default createReducer(counterInit, {'listAdd': add, 'listRemove': remove });

