// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { book } from './book';
//components
import Kanban from '../components/Kanban';
import Canvas from '../components/Canvas';



export default class Private extends Component {
	render() {
		return (
			<Switch>
				<Route path={book.kanban} component={Kanban} />
				<Route path={book.canvas} component={Canvas} />

				<Redirect to={book.canvas} />
			</Switch>
		);
	}
}
