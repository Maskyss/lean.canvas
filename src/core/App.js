//Core
import React, { Component, useEffect, useState } from 'react';
import Private from '../core/Private';
import Public from '../core/Public';
import { connect } from 'react-redux';

import { Portal } from 'react-portal';
import { PacmanLoader } from 'react-spinners';
import io from 'socket.io-client';
const mapStateToProps = (state) => ({
	isAuthenticated: state.authReducer.get('isAuthenticated'),
	isSpinning: state.spinnerReducer.get('spinnerAction'),
	cardList: state.updateCardReducer.get("cardList")

});
const mapDispatchToProps = {};
const socket = io(`http://localhost:6001/`); 

const App =()=>{
	const [online, setOnline] = useState(false);

    useEffect(() => {
    //     const { pathname } = window.location;
    //     const password = prompt('Pass: ');

        socket.on('connect', () => {
            console.log(true)
            setOnline(true)});
        socket.on('disconnect', () => {
            setOnline(false);
        });
        socket.on('errorMessage', (data) => console.log('Error!', data));
        socket.on('joinedRoom', (data) => console.log( data));


    //     socket.on('pongResponse', (data) => console.log(data));
        socket.on('canvasUpdated', (data) => console.log(data));
        socket.on('canvasCreated', (data) => console.log(data));
        socket.on('newTokens', (data) => console.log(data));

        

    //     socket.on('joinedGroup', ({ roomId }) => setGroupId(roomId));

    //     socket.emit('join', { roomId: pathname.split('/')[1], password });
    }, []);

    // const _ping = () => socket.emit('pingRequest', groupId);

    // const _updArray = () => {
    //     const updatedArray = [
    //         Math.random().toFixed(2),
    //         Math.random().toFixed(2),
    //         Math.random().toFixed(2),
    //         Math.random().toFixed(2),
    //         Math.random().toFixed(2),
    //         Math.random().toFixed(2),
    //         Math.random().toFixed(2),
    //         Math.random().toFixed(2),
    //         Math.random().toFixed(2),
    //         Math.random().toFixed(2),
    //     ];

    //     updateArr(updatedArray);

    //     socket.emit('canvasUpdate', { roomId: groupId, updatedCanvas: updatedArray });
    // };
	
		return (
			<>
			 {/* <div className='App'>
            <header className='App-header'>
                <div className='container'>
                    {arr.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>

                <p>
                    App is <code>{online ? 'online ' : 'offline'}</code>
                    {online && `at group `}
                    {online && <code>{groupId}</code>}
                </p>
                <button onClick={_ping}>Ping!</button>
                <button onClick={_updArray}>Update array</button>
            </header>
        </div> */}
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


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
