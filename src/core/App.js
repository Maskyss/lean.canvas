//Core
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import io from "socket.io-client";

import { socket } from "../REST/api";
import Canvas from '../components/Canvas';



// const socket = io(`http://localhost:6001/`);

const App = ({}) => {

  useEffect(() => {
    socket.on('canvasUpdated', (data)=>{
      console.log(data,'data')
    })
    socket.on("connect", () => {
      console.log('connected');
    });
   

    // socket.on("disconnect", () => {
    //   setOnline(false);
    // });
    
    // socket.on("errorMessage", data => console.log("Error!", data));
    // socket.on("joinedRoom", data => console.log(data));

    // socket.on("canvasUpdated", data => console.log(data));
    // socket.on("canvasCreated", data => console.log(data));
    // socket.on("newTokens", data => console.log(data));

    // socket.emit("createCanvas", { canvasData:cardList, ...authData });
  }, []);
  // const _createCanvas=()=>  {
    
  //   // socket.emit("createCanvas", { canvasData:cardList, password:'', title:''})}

  return (
      <Canvas  />
  );
};

export default App;
