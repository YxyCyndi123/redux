
//创建一个reducer
function createReducer(init, json) {
    //json {'listadd': 'add'}
    //key - type value - function
    return function reducer(state=init,action){
        // console.log(action)
    
        //({type:'add'})
        // json['add']
            if(json[action.type]){
                return json[action.type](state, action)
            }
            else{
                return state;
            }
        }
}
export default createReducer;