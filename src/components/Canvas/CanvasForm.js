import React from "react";
import styled from "styled-components";

import {StyledTextArea,Block} from './styles'




const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CanvasForm = React.memo(({ text = "", onChange, saveCard,children }) => {
  const placeholder = "Enter card title";

  return (
    <>
        <StyledTextArea
        style={{fontSize:'12px'}}
          placeholder={placeholder}
          autoFocus
          value={text}
          onChange={e => onChange(e)}
          onBlur={saveCard}
        />
      <ButtonContainer>
        {children}
      </ButtonContainer>
    </>
  );
});

export default CanvasForm;
