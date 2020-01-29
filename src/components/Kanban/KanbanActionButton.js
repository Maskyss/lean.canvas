// The ADD button
import React, { Component, useState } from "react";
import Textarea from "react-textarea-autosize";
import styled, { keyframes } from "styled-components";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { actionsCard } from "../../bus/card/actions";

const StyledButton = styled(Button)`
  && {
    color: white;
    background: #5aac44;
    &&:hover {
      background: blue;
    }
  }
`;

const Container = styled.div`
  width: 284px;
  margin-bottom: 8px;
`;

const StyledCard = styled(Card)`
  min-height: 85px;
  padding: 6px 8px 2px;
`;

const StyledTextArea = styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const pulse = keyframes`
from {
  transform:rotate(0deg);
}
to {
  transform:rotate(360deg);
}`;

const StyledIcon = styled.div`
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    animation-name: ${pulse};
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

const mapStateToProps = state => ({
  cardList: state.updateCardReducer.get("cardList")
});
const mapDispatchToProps = {
  addCard: actionsCard.addCard
};

const KanbanActionButton = ({ listID, addCard, cardList }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, settext] = useState("");

  const handleInputChange = e => {
    settext(e.target.value);
  };

  const handleAddCard = () => {
    if (text) {
      settext("");
      setFormOpen(false);
      addCard([{ text, listID }, ...cardList]);
    }
    return;
  };

  const renderAddButton = () => {
    const buttonText = "Add new card";
    const buttonTextOpacity = 0.7;
    const buttonTextColor = "inherit";
    const buttonTextBackground = "inherit";

    const OpenFormButton = styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 3px;
      height: 36px;
      margin-left: 8px;
      width: 300px;
      padding-left: 10px;
      padding-right: 10px;
      opacity: ${buttonTextOpacity};
      color: ${buttonTextColor};
      background-color: ${buttonTextBackground};
    `;

    return (
      <OpenFormButton onClick={() => setFormOpen(true)}>
        <div>+</div>
        <p>{buttonText}</p>
      </OpenFormButton>
    );
  };

  const renderForm = () => {
    const placeholder = "Enter card name";

    const buttonTitle = "Add Card";

    return (
      <Container>
        <StyledCard>
          <StyledTextArea
            placeholder={placeholder}
            autoFocus
            onBlur={() => setFormOpen(true)}
            value={text}
            onChange={handleInputChange}
          />
        </StyledCard>
        <StyledButton variant="contained" onMouseDown={handleAddCard}>
          {buttonTitle}
        </StyledButton>
        <ButtonContainer>
          <StyledIcon onClick={() => setFormOpen(false)}>close</StyledIcon>
        </ButtonContainer>
      </Container>
    );
  };

  return <>{formOpen ? renderForm() : renderAddButton()}</>;
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanActionButton);
