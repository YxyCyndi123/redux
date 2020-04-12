//单拿出store 可以通用store

import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers';

const store = createStore(Reducer, applyMiddleware(leo));

//中间件（在action - state）
function leo({ getState }) {
    return function(dispatch) {
        //next就是一个参数 - 表示下一步
        // debugger;
        return function(action) {
            if(action.type == 'add') {
                dispatch(action);
            }else{
                console.log('步操作')
            }
        }
    }
}
export default store;