import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import KanbanButton from "./KanbanButton";
import KanbanForm from "./KanbanForm";
import { actionsCard } from "../../bus/card/actions";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const EditButton = styled.div`
  position: absolute;
  right: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled.div`
  position: absolute;
  right: 32px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const mapStateToProps = (state) => ({
  cardList: state.updateCardReducer.get('cardList')
});

const mapDispatchToProps = {
  editCard:actionsCard.editCard,
	deleteCard:actionsCard.deleteCard,
};


const KanbanCard = ({ text, listID, id,  index, editCard, deleteCard,cardList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const handleDeleteCard = e => {

    deleteCard([{id, listID},...cardList]);
  };

  const closeForm = e => {
    setIsEditing(false);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const saveCard = e => {

    e.preventDefault();
    editCard([{id, listID, cardText}, ...cardList]);
    setIsEditing(false);
  };

  const renderEditForm = () => {
    return (
      <KanbanForm text={cardText} onChange={handleChange} closeForm={closeForm}>
        <KanbanButton onClick={saveCard}>Save</KanbanButton>
      </KanbanForm>
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
            <Card>
              <EditButton
                onMouseDown={() => setIsEditing(true)}
                fontSize="small"
              >
                edit
              </EditButton>

              <DeleteButton fontSize="small" onMouseDown={handleDeleteCard}>
                delete
              </DeleteButton>

              <div>
                <div id={id}>{text}</div>
              </div>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanCard);
