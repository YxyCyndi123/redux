import React, { Component } from 'react';

import $ from 'jquery';

import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

import store from '../../store';


class Mybook extends Component {
    componentDidMount() {
        //发送请求
        this.ajax();
    }
    componentDidUpdate() {
        this.ajax();
    }
    ajax() {
        $.ajax({
            url: 'http://localhost:2139/book',
            data: {
                id: this.props.match.params.id
            },
            success: function(data) {
                // console.log('data是',data);
                store.dispatch({type: 'bookAdd', text: data.data})
            }
        })
    }
    render() {
        console.log('id参数',this.props.match.params);
        return (
        <div dangerouslySetInnerHTML={{__html: store.getState().book}}></div>
        )
    }
}

class Book extends Component {
    render() {        
        return (
            <Router>
				<div>					
					<Link to='/001'>文章一</Link>
					<Link to='/002'>文章二</Link>
					<Link to='/003'>文章三</Link>

					<Route path='/:id' component={Mybook} />
				</div>

			</Router>
        )
    }
}

export default Book;