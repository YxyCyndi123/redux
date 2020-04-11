import React, { Component } from 'react';

import $ from 'jquery';

import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

import store from '../../store';
console.log(store.getState());


class Mybook extends Component {
    render() {
        console.log(this.props);
        return (
        <div>{store.getState().book}</div>
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