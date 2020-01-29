// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/Login';
import { book } from './book';

export default class Public extends Component {
	//in public private class xD
	componentDidMount = () => {};

	render() {
		return (
			<Switch>
				<Route path={book.login} component={Login} />
				<Redirect to={book.login} />
			</Switch>
		);
	}
}
