import React from "react";

import {
  Container,
  BorderContainer,
  Close,
  Button,
  Subtitle,
  MainTitle
} from "../mainStyles";

const DeleteCanva = ({ togglePopup, deleteCanva }) => {
  return (
    <BorderContainer onClick={togglePopup} id="delete">
      <Container
        id="containerDelete"
        style={{ padding: "4rem 5rem 3rem", height: "28rem" }}
      >
        <Close id="delete">&times;</Close>
        <MainTitle>Delete canva?</MainTitle>
        <Subtitle style={{ marginBottom: "4rem" }}>
          After deletion, you will not be able to recover data
        </Subtitle>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button blue id="delete">
            No
          </Button>
          <Button onClick={deleteCanva}>Yes</Button>{" "}
        </div>
      </Container>
    </BorderContainer>
  );
};

export default DeleteCanva;
