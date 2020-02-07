//Core
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import io from "socket.io-client";

import { socket } from "../REST/api";
import Canvas from '../components/Canvas';


const mapStateToProps = state => ({
  cardList: state.updateCardReducer.get("cardList"),
  authData: state.updateAuthReducer.get("authData")
});
const mapDispatchToProps = {
};
// const socket = io(`http://localhost:6001/`);

const App = ({cardList,authData}) => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    console.log('blyat', authData,cardList);

    socket.on("connect", () => {
      console.log(true);
      setOnline(true);
    });
    socket.on("disconnect", () => {
      setOnline(false);
    });
    socket.on("errorMessage", data => console.log("Error!", data));
    socket.on("joinedRoom", data => console.log(data));

    socket.on("canvasUpdated", data => console.log(data));
    socket.on("canvasCreated", data => console.log(data));
    socket.on("newTokens", data => console.log(data));

    // socket.emit("createCanvas", { canvasData:cardList, ...authData });
  }, []);
  // const _createCanvas=()=>  {
  //   console.log('blyat', authData,cardList)}
    
  //   // socket.emit("createCanvas", { canvasData:cardList, password:'', title:''})}

  return (
      <Canvas  />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
