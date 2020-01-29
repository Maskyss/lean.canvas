import React, { useState, useEffect } from "react";

// import {  BorderContainer } from "./styles";

import { Container,BorderContainer,  } from "../mainStyles";
import PopupStandard from "../../_shared/PopupStandard";

import { connect } from "react-redux";

const mapStateToProps = state => ({
  // cardList: state.updateCardReducer.get("cardList")
});
const mapDispatchToProps = {
  // dragHappaned: actionsCard.dragHappaned,
  // getList: actionsCard.getList
};
const SendPdfComponent = ({ togglePopup }) => {
  const [copy, setCopy] = useState(false);
  const [mainLink, setMainLink] = useState("");
  const [code, setCode] = useState("k21jisru14141");
  
  const _copyText = () => {
    setCopy(true);
    navigator.clipboard.writeText(code);
  };
  
  const arrPopup = {
    id: "verification",
    title: "Verification",
    subt: "Enter access code to enter this page",
    accsCode: "Access code",
    textC: code,
    clickAction:copy,
    textClick: ["Send invite", "Sent!"],
    funcAction: _copyText,
    input:true

  };

  
  return (
    <BorderContainer onClick={togglePopup} id="verification">
      <Container style={{height:'28rem'}}>
        <PopupStandard {...arrPopup}/>
      </Container>
    </BorderContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SendPdfComponent);
