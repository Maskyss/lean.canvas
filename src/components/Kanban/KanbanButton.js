import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  && {
    color: white;
    background: #5aac44;
  }
`;

const TrelloButton = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  );
};

export default TrelloButton;
