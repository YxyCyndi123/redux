
//counnter reducer.js
export default function counter(state=0, action){
    switch(action.type) {
        case 'counterAdd':
            return state+1
        case 'abstract': 
            return state-1
        default:
            return state
    }
}