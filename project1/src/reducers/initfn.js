//数据事件分离 - 存储区
function add(state, action) {
    return [...state,action.text]
}

function remove(state,action) {
    state.splice(action.text, 1);
    return state;
}

export { add, remove }