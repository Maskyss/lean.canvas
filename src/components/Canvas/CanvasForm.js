import React from "react";
import styled from "styled-components";

import {StyledTextArea,ButtonController,Block} from './styles'


const StyledCard = styled.div`
  max-height:6rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CanvasForm = ({ text = "", onChange, closeForm, children }) => {
  const placeholder = "Enter card title";

  return (
    <Block>
      <StyledCard>
        <StyledTextArea
          placeholder={placeholder}
          autoFocus
          value={text}
          onChange={e => onChange(e)}
          onBlur={closeForm}
        />
      </StyledCard>
      <ButtonContainer>
        {children}
        <ButtonController onMouseDown={closeForm}>Close</ButtonController>
      </ButtonContainer>
    </Block>
  );
};

export default CanvasForm;
