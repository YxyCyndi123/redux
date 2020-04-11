

//list reducer boli
import { counterInit, TabInit } from './initState';
import { add, remove } from './initfn';


//方式1 - 若有多个action  - 会过于长 state and fn()未剥离
// export default function counter (state=counterInit, action){
//     switch(action.type){
//         case 'add': 
//             console.log(state,action);
//             return add(state, action.text);
//         case 'remove':
//             console.log(state,action);           
//             return remove(state, action.text);
//         default:
//             return state;
//     }
// }

//方式2： 见一个createReducer - 
import createReducer  from './createReducer';
let counter = createReducer(counterInit, {'listAdd':add,'listremove':remove} );

export default counter;



