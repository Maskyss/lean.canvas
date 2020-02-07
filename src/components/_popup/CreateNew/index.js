import React, { useState, useEffect } from "react";

// import {  BorderContainer } from "./styles";

import { Container, BorderContainer } from "../mainStyles";
import {
  Button,
  Subtitle,
  MainTitle,
  PopupMessage
} from "../../_popup/mainStyles";
import {actionsAuth} from '../../../bus/auth/actions'
import { InputC } from "./styles";
import { DivWithAccess, Access } from "../../_shared/PopupStandard/styles";
import { connect } from "react-redux";

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
  getAuth: actionsAuth.getAuth,
};
const CreateNewCanvaComponent = ({ createNewCanva,getAuth }) => {
  const [title, settitle] = useState("");
  const [password, setpassword] = useState("");

  const [errEmpty, setErrEmpty] = useState(false);

  const _createNewCanvas = () => {
    if (title === "" || password === "") {
      setErrEmpty(true);
    } else {
      setErrEmpty(false);
      getAuth({ password, title});
      createNewCanva()
    }
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
            Input title, please
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
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewCanvaComponent);
