import React, { useState, useEffect } from "react";

// import {  BorderContainer } from "./styles";

import { Container,BorderContainer,  } from "../mainStyles";
import PopupStandard from "../../_shared/PopupStandard";

import { connect } from "react-redux";

const SendPdfComponent = ({ togglePopup }) => {
  const [copy, setCopy] = useState(false);
  const [mainLink, setMainLink] = useState("");
  const [code, setCode] = useState("k21jisru14141");
  
  const _copyText = () => {
    setCopy(true);
    navigator.clipboard.writeText(code);
  };
  
  const arrPopup = {
    id: "sendPdf",
    title: "Send pdf",
    subt: "You can invite a user by email",
    accsCode: "Send by email",
    textC: code,
    clickAction:copy,
    textClick: "Send invite",
    funcAction: _copyText,
    input:true,
    textPopup:'sent'

  };

  
  return (
    <BorderContainer onClick={togglePopup} id="sendPdf">
      <Container style={{height:'28rem'}} id="containerSendPdf">
        <PopupStandard {...arrPopup}/>
      </Container>
    </BorderContainer>
  );
};

export default SendPdfComponent;
