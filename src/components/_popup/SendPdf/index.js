import React, { useState } from "react";

import {
  BorderContainer,
  Container,
  Close,
  Button,
  Subtitle,
  MainTitle,
  DivWithAccess,
  Access,
  PopupMessage,
  InputC
} from "../mainStyles";
import { socket } from "../../../REST/api";
import { useSelector } from "react-redux";

import styled from "styled-components";

const PopupC = styled(PopupMessage)`
  right: 5rem;
  bottom: 1rem;
`;

const SendPdfComponent = ({ togglePopup }) => {
  const { accessToken: token } = useSelector(state =>
    state.updateAuthReducer.get("authData")
  );
  const [spinner, setspinner] = useState(false);

  const [sent, setSent] = useState(false);
  const [notsent, setNotSent] = useState(false);

  const [email, setemail] = useState("");

  const _sendPdf = e => {
    e.preventDefault();
    setspinner(true);

    socket.emit(
      "sendPdf",
      {
        canvasId: localStorage.getItem("id"),
        email,
        token
      },
      data => {
        setTimeout(() => {
          setspinner(false);
          if (data.success) {
            setSent(true);
            setNotSent(false);
          } else {
            setSent(false);
            setNotSent(true);
          }
        }, 1000);
      }
    );
    // setCopy(true);
    // navigator.clipboard.writeText(code);
  };

  const _handleInput = e => {
    setemail(e.target.value);
  };
  return (
    <BorderContainer onClick={togglePopup} id="sendPdf">
      <Container style={{ height: "28rem" }} id="containerSendPdf">
        <Close id={"sendPdf"}>&times;</Close>
        <MainTitle>{"Send pdf"}</MainTitle>
        <Subtitle style={{ marginBottom: "2rem" }}>
          {"You can invite a user by email"}
        </Subtitle>
        <DivWithAccess>
          <div
            style={{ display: "flex", flexDirection: "column", width: "55%" }}
          >
            <Access>{"Send by email"}</Access>
            <InputC
              placeholder="k21jisru14141"
              type="text"
              onChange={_handleInput}
              value={email}
              name="email"
            />
          </div>

          <Button onClick={_sendPdf}>
            {spinner ? <div className="spinner" /> : `Send`}
          </Button>
          {sent && <PopupC>{"Successful sent"}</PopupC>}
          {notsent && <PopupC>{"Something wrong, please check email"}</PopupC>}
        </DivWithAccess>
      </Container>
    </BorderContainer>
  );
};

export default SendPdfComponent;
