//Core
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { actionsCard } from "../bus/card/actions";

import { socket } from "../REST/api";
import Canvas from "../components/Canvas";
import Header from "../components/Header";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("canvasUpdated", data => {
      dispatch(actionsCard.setList(data.canvasData));
    });
    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);

  return (
    <>
      <Header />
      <Canvas />
    </>
  );
};

export default App;
