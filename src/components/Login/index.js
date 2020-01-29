import React, { Component } from 'react';
import { connect } from 'react-redux';

import LabeledInput from '../_shared/LabeledInput';

import Styles from './index.module.scss';

import { actionsAuth } from '../../bus/auth/actions';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
	login: actionsAuth.login,
};

class Login extends Component {
	state = {
		name: '',
		password: '',
	};

	_handleInput = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name]: value,
		});
	};

	_handleLogin = (e) => {
		e.preventDefault();
		const { login: loginAsync } = this.props;
		const { name: login, password } = this.state;
		loginAsync({ login, password });
	};

	render() {
		const { name, password } = this.state;

		const inputFields = [
			{
				value: name,
				onChange: this._handleInput,
				name: 'name',
				type: 'text',
				label: 'Username or email',
			},
			{
				value: password,
				onChange: this._handleInput,
				name: 'password',
				type: 'password',
				label: 'Password',
			},
		];

		return (
			<div className={Styles.container}>
				{inputFields.map((item, index) => (
					<LabeledInput
						value={item.value}
						onChange={item.onChange}
						placeholder={item.placeholder}
						name={item.name}
						type={item.type}
						label={item.label}
						key={index}
					/>
				))}
				<button onClick={this._handleLogin}>Login</button>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);
