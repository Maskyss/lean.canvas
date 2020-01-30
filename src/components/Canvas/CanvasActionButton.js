// The ADD button
import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionsCard } from "../../bus/card/actions";
import {StyledTextArea,Block} from './styles'


const OpenFormButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  margin-left:1rem;
  bottom: 2rem;
  padding: 1rem;
  background:#1B85E5;
  cursor: pointer;
  color:white;
  :hover{
    background:#115FA6;}

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
      <Block>
        <StyledTextArea
          placeholder={placeholder}
          autoFocus
          onBlur={() => setFormOpen(!formOpen)}
          value={text}
          onChange={handleInputChange}
        />
        <div onMouseDown={handleAddCard}>{buttonTitle}</div>
        <div onClick={() => setFormOpen(!formOpen)}>close</div>
      </Block>
    );
  };

  return <>{formOpen ? renderForm() : renderAddButton()}</>;
};
export default connect(mapStateToProps, mapDispatchToProps)(KanbanActionButton);
