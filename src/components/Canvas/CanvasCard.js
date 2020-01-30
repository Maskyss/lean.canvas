import React, { useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import { actionsCard } from "../../bus/card/actions";

import CanvasForm from "./CanvasForm";
import {ButtonController} from './styles'
const CardContainer = styled.div`
  margin-bottom:0.5rem;
  position: relative;
  max-width: 100%;
  word-break: break-word;
`;

const DeleteButton = styled.div`
  position: absolute;
  right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  top: 0;
  &:hover {
    opacity: 0.5;
  }
`;

const CardDiv = styled.div`
  background: #3e3e3e;
  color: #969696;
  padding: 1rem;
  padding-right: 2rem;
  width:95%;
  margin:auto;
  max-height: 6rem;
    overflow: hidden;
    // .longClose{
    //  right:2rem;
    // }
`;

const mapStateToProps = state => ({
  cardList: state.updateCardReducer.get("cardList")
});

const mapDispatchToProps = {
  editCard: actionsCard.editCard,
  deleteCard: actionsCard.deleteCard
};

const CanvasCard = ({
  text,
  listID,
  id,
  index,
  editCard,
  deleteCard,
  cardList
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const handleDeleteCard = e => {
    deleteCard([{ id, listID }, ...cardList]);
  };

  const closeForm = e => {
    setIsEditing(false);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const saveCard = e => {
    e.preventDefault();
    editCard([{ id, listID, cardText }, ...cardList]);
    setIsEditing(false);
  };

  const renderEditForm = () => {
    return (
      <CanvasForm text={cardText} onChange={handleChange} closeForm={closeForm}>
        <ButtonController onMouseDown={saveCard}>Save</ButtonController>
      </CanvasForm>
    );
  };

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <CardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >
            <CardDiv>
              <DeleteButton   onMouseDown={handleDeleteCard}>
                ×
                {console.log(listID)}
              </DeleteButton>

              <div>
                <div id={id}>{text}</div>
              </div>
            </CardDiv>
          </CardContainer>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasCard);
