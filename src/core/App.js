//Core
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { actionsCard } from "../bus/card/actions";

import { socket } from "../REST/api";
import Canvas from "../components/Canvas";
import PreloaderComponent from "../components/PreloaderComponent";
import PopupError from "../components/_popup/PopupError";

import Header from "../components/Header";
import { Portal } from "react-portal";

const App = () => {
  const dispatch = useDispatch();
  const [preloader, setPreloader] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    var onl = false
    socket.on("canvasUpdated", data => {
      dispatch(actionsCard.setList(data.canvasData));
    });

    socket.on("connect", () => {
      onl=true
      console.log(true);
      turnOffPreloader();
    });
    socket.on("disconnect", () => {
      seterror(true);
      console.log(false);
    });
    setTimeout(() => {
      if (onl===false) {
        seterror(true);
        setPreloader(false);
      }
    }, 7000);
  }, []);

  const turnOffPreloader = () => {
    const { body } = document;

    setTimeout(() => {
      setPreloader(false);
      body.setAttribute("style", "overflow-y:auto");
    }, 1500);
  };

  return (
    <>
      {preloader && (
        <Portal>
          <PreloaderComponent />
        </Portal>
      )}
      {error && (
        <Portal>
          <PopupError />
        </Portal>
      )}
      <Header />
      <Canvas />
    </>
  );
};

export default App;
