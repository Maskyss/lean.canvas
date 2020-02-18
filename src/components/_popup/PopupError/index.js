import React from "react";
import {
  BorderContainer,
  Subtitle,
  Container,
  Button,
  MainTitle
} from "../mainStyles";

const PreloaderComponent = () => {
  const _reload = () => {
    window.location.reload("true");
  };
  return (
    <BorderContainer>
      <Container style={{ height: "26rem" }} id="containerCreate">
        <MainTitle style={{ textAlign: "center" }} id="createNewC">
          Something wrong :(
        </MainTitle>
        <Subtitle style={{ textAlign: "center" }}>
          Please reload page
        </Subtitle>

        <Button
          style={{ margin: "auto", marginBottom: "0.5rem" }}
          onClick={_reload}
        >
          Reload
        </Button>
      </Container>
    </BorderContainer>
  );
};

export default PreloaderComponent;
