import React, { useState, useEffect } from "react";

// import {  BorderContainer } from "./styles";

import { Container, BorderContainer } from "../mainStyles";
import { Button, Subtitle, MainTitle,PopupMessage } from "../../_popup/mainStyles";
import { InputC } from "./styles";
import { DivWithAccess, Access } from "../../_shared/PopupStandard/styles";

import { connect } from "react-redux";

const mapStateToProps = state => ({
  // cardList: state.updateCardReducer.get("cardList")
});
const mapDispatchToProps = {
  // dragHappaned: actionsCard.dragHappaned,
  // getList: actionsCard.getList
};
const CreateNewCanvaComponent = ({ createNewCanva }) => {
  const [title, settitle] = useState("");
  const [errEmpty, setErrEmpty] = useState(false);

  const _createNewCanvas = () => {
    if(title===''){
      setErrEmpty(true)
    }else{
      setErrEmpty(false)
      localStorage.setItem("title", title);
      createNewCanva()
    }
  };
  const _handleInput =(e)=>{
    if(errEmpty){
      setErrEmpty(false)
    }
    settitle(e.target.value)
  }

  return (
    <BorderContainer>
      <Container style={{ height: "28rem" }} id="containerSendPdf">
        <MainTitle id="createNewC">Create new canva</MainTitle>
        <Subtitle style={{ marginBottom: "4rem" }}>
          Enter the name of your canva
        </Subtitle>
        <DivWithAccess>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
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

          <Button onClick={_createNewCanvas}>Create</Button>
          {errEmpty&&<PopupMessage>Input title, please</PopupMessage>}
        </DivWithAccess>
      </Container>
    </BorderContainer>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewCanvaComponent);
