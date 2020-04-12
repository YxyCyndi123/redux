import React, { Component } from 'react';

class List extends Component {
    add() {
        const { store } = this.props;

        store.dispatch({
           type:'listAdd',
           text: this.refs.input.value
        }); 
    }
    remove(index){
        // alert(index);
        const { store } = this.props;
        
        store.dispatch({
            type:'listRemove',
            text: index
        });
    }
    render() {
        const { store } = this.props;
        console.log(store.getState());
        return (
            <div>
            <input type="text" ref='input'/>
            <input type="submit" onClick={this.add.bind(this)}/>
            {
               
                store.getState ? store.getState().list.map((item, index) => (
                    <li key={index} onClick={() => this.remove(index)}> {item} </li>
                )):<></>
            }
            </div>
        )
    }
}

export default List;