//Core
import React, { Component } from 'react';
import Private from '../core/Private';
import Public from '../core/Public';
import { connect } from 'react-redux';

import { Portal } from 'react-portal';
import { PacmanLoader } from 'react-spinners';

const mapStateToProps = (state) => ({
	isAuthenticated: state.authReducer.get('isAuthenticated'),
	isSpinning: state.spinnerReducer.get('spinnerAction'),
	cardList: state.updateCardReducer.get("cardList")

});

const mapDispatchToProps = {};
class App extends Component {

	render() {
		//isAuthenticated
		const { isSpinning, isAuthenticated } = this.props;
		// const isAuthenticated = true;

		return (
			<>
				{/* {isAuthenticated ? */}
				 <Private /> 
				 {/* : <Public />}
				 <Portal>
					<PacmanLoader
						sizeUnit={'px'}
						size={150}
						color={'#12b2bc'}
						loading={isSpinning}
					/>
			</Portal>  */}
			</>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
