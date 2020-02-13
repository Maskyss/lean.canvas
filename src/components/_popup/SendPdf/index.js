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
import {  useSelector } from "react-redux";

import styled from "styled-components";

const PopupC = styled(PopupMessage)`
  right: 5rem;
  bottom: 1rem;
`;

const SendPdfComponent = ({ togglePopup }) => {
  const { accessToken: token } = useSelector(state =>
    state.updateAuthReducer.get("authData")
  );

  const [copy, setCopy] = useState(false);
  const [email, setemail] = useState("");

  const _copyText = () => {
    socket.emit(
      "sendPdf",
      {
        canvasId: localStorage.getItem("id"),
       email,
       token
      },
      (data) => {
        console.log(data)
        if (data.statusCode !== undefined) {

        } 
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

          <Button onClick={_copyText}>{"Send"}</Button>
          {copy && <PopupC>{"Sent"}</PopupC>}
        </DivWithAccess>
      </Container>
    </BorderContainer>
  );
};

export default SendPdfComponent;
