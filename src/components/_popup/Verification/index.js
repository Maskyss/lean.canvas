import React, { useState } from "react";

import {
  Container,
  BorderContainer,
  Button,
  DivWithAccess,
  Access,
  Subtitle,
  MainTitle,
  PopupMessage,
  InputC
} from "../mainStyles";

import { socket } from "../../../REST/api";

const Verification = ({ verification, createNewCanva }) => {
  const [password, setpassword] = useState("");
  const [spinner, setspinner] = useState(false);
  const [errorClient, seterrorClient] = useState(false);

  const _handleInput = e => {
    if (errorClient) {
      seterrorClient(false);
    }
    setpassword(e.target.value);
  };

  const _openRoom = () => {
    const url = window.location.pathname.substring(1);
    setspinner(true);

    socket.emit("joinCanvasRoom", { canvasId: url, password }, data => {
      console.log(data, "joinCanvasRoom");

      setTimeout(() => {
        setspinner(false);
        if (data.statusCode !== undefined) {
          seterrorClient(true);
        } else {
          verification(data);
          localStorage.setItem("id", data.id);
          localStorage.setItem("password", password);
        }
      }, 1000);
    });
  };

  return (
    <BorderContainer>
      <Container style={{ height: "42rem" }} id="containerCreate">
        <MainTitle id="createNewC">Verification</MainTitle>
        <Subtitle style={{ marginBottom: "2rem" }}>
          Enter access Code to enter this page
        </Subtitle>
        <DivWithAccess>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
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
          <Button blue onClick={() => _openRoom()}>
            {spinner ? <div className="spinner" /> : `Verification`}
          </Button>
          {errorClient && (
            <PopupMessage style={{ right: "5rem", bottom: "15.5rem" }}>
              You dont have access
            </PopupMessage>
          )}
        </DivWithAccess>
        <Subtitle>
          <hr className="hr-text" data-content="Or you can create new canva" />
        </Subtitle>
        <Button
          style={{ margin: "auto" }}
          onClick={() => {
            createNewCanva();
          }}
        >
          Create New
        </Button>
      </Container>
    </BorderContainer>
  );
};

export default Verification;
