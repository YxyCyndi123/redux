import React, { Component } from 'react';

//Counter compoenys
class Counter extends Component {

    odd(value,onAdd){
        if(value %2  === 0){
            onAdd();
        }
    }
    
    render() {
        const { value, onAdd, onSub } = this.props;
        return (
            <div>
               <input type="button" value='+' onClick={onAdd}/>
                <span>{ value }</span>
               <input type="button" value='-' onClick={onSub}/>
               <input type="button" value="odd" onClick= {() => this.odd(value, onAdd)} />
            </div>
        )
    }
}

export default Counter;