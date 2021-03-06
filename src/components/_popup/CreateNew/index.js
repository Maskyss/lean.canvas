import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Portal } from "react-portal";
import PopupError from "../PopupError";

import {
  BorderContainer,
  Container,
  Button,
  Subtitle,
  MainTitle,
  PopupMessage,
  Access,
  InputC
} from "../mainStyles";

import { actionsAuth } from "../../../bus/auth/actions";

import { socket } from "../../../REST/api";

const defaultPopup = "Title or code is empty";

const CreateNewCanvaComponent = ({ createNewCanva }) => {
  const cardList = useSelector(state =>
    state.updateCardReducer.get("cardList")
  );
  const dispatch = useDispatch();
  const [error, seterror] = useState(false);

  const [title, settitle] = useState("");
  const [password, setpassword] = useState("");
  const [popupMess, setpopupMess] = useState(defaultPopup);
  const [errEmpty, setErrEmpty] = useState(false);

  const _createNewCanvas = () => {
    if (title === "" || password === "") {
      setErrEmpty(true);
    } else if (title.length < 3) {
      setErrEmpty(true);
      setpopupMess("Title length min 3 symbols");
    } else if (password.length < 6) {
      setErrEmpty(true);
      setpopupMess("Password length min 6 symbols");
    } else {
      setErrEmpty(false);
      _socketCreateCanvas();

      createNewCanva();
    }
  };

  const _socketCreateCanvas = () => {
    socket.emit(
      "createCanvas",
      { canvasData: cardList, password, title },
      data => {
        // console.log("createCanvas", data);
        if (data.statusCode !== undefined) {
          seterror(true)
        }else{
        dispatch(
          actionsAuth.setAuth({
            id: data.id,
            accessToken: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken
          })
        );

        setTimeout(() => {
          console.log(data.tokens.refreshToken);
          socket.emit(
            "refreshTokens",
            {
              refreshToken: data.tokens.refreshToken
            },
            data => {
              if (data.statusCode !== undefined) {
                seterror(true)
              }
              console.log(data, "refreshTokens:token");
            }
          );
        }, 12000000);

        window.history.pushState(
          "object or string",
          "Title",
          window.location.href + data.id
        );

        localStorage.setItem("id", data.id);
        localStorage.setItem("password", password);
      }
      }
    );
  };

  const _handleInput = e => {
    const { name: targetName, value } = e.target;

    switch (targetName) {
      case "title":
        settitle(value);
        break;
      case "password":
        setpassword(value);
        break;
    }

    if (errEmpty) {
      setErrEmpty(false);
    }
  };

  return (
    <>
    {error && (
      <Portal>
        <PopupError
        />
      </Portal>
    )}
    <BorderContainer>
      <Container style={{ height: "42rem" }} id="containerCreate">
        <MainTitle id="createNewC">Create new canva</MainTitle>
        <Subtitle style={{ marginBottom: "2rem" }}>
          Enter the name of your canva
        </Subtitle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginBottom: "2rem"
          }}
        >
          <Access>Title</Access>
          <InputC
            placeholder="My project 1"
            type="text"
            onChange={_handleInput}
            value={title}
            name="title"
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Access>Code Access</Access>
          <InputC
            placeholder="k21jisru14141"
            type="text"
            onChange={_handleInput}
            value={password}
            name="password"
          />
        </div>

        {errEmpty && (
          <PopupMessage style={{ right: "20.5rem" }} id="popupCreate">
            {popupMess}
          </PopupMessage>
        )}
        <Button
          style={{ margin: "auto", marginBottom: "0.5rem" }}
          onClick={_createNewCanvas}
        >
          Create
        </Button>
      </Container>
    </BorderContainer>
    </>
  );
};

export default CreateNewCanvaComponent;
