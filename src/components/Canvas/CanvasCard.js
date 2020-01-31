import React, { useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import { actionsCard } from "../../bus/card/actions";

import CanvasForm from "./CanvasForm";

import trash from "../../static/trash.svg";
import dots from "../../static/dots.svg";

const CardContainer = styled.div`
  // margin-bottom:0.5rem;
  position: relative;
  max-width: 100%;
  word-break: break-word;

  ${props =>
    props.isDragging
      ? `border:1px solid #1B85E5;
    box-shadow: 5px 5px 15px -5px rgba(27,133,229,0.3);  
    `
      : `border:1px solid #3e3e3e;
    box-shadow: none;
    `};
`;

const DeleteButton = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const CardDiv = styled.div`
  background: #3e3e3e;
  color: #969696;
  padding: 1rem;
  padding-right: 2rem;
  display: flex;
  .deleteBtnN {
    display: none;

    height: 1rem;
  }
  .deleteBtnV {
    display: block;
      position: absolute;
      right: 1.3rem;
      top: 1rem;
  }

  :hover {
    // padding-right: 0rem;
    .deleteBtnV {
      display: block;
      position: absolute;
      right: 1.3rem;
      top: 1rem;
    }
    .deleteBtnN {
      display: block;
      position: absolute;
      right: 1.3rem;
      top: 1rem;
    }
  }
`;

const mapStateToProps = state => ({
  cardList: state.updateCardReducer.get("cardList")
});

const mapDispatchToProps = {
  editCard: actionsCard.editCard,
  deleteCard: actionsCard.deleteCard
};

const CanvasCard = React.memo(
  ({ text, listID, id, index, editCard, deleteCard, cardList }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [cardText, setText] = useState(text);

    const handleDeleteCard = e => {
      deleteCard([{ id, listID }, ...cardList]);
    };

 

    const handleChange = e => {
      setText(e.target.value);
    };

    const saveCard = e => {
      e.preventDefault();
      editCard([{ id, listID, cardText }, ...cardList]);
      setIsEditing(false);
    };

  
    const renderCard = () => {
      return (
        <Draggable draggableId={String(id)} index={index}>
          {(provided, snapshot) => (
            <CardContainer
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onDoubleClick={() => setIsEditing(true)}
              isDragging={snapshot.isDragging}
            >
              <CardDiv style={{fontSize:'12px'}}>
                <img style={{ marginRight: "0.5rem" }} src={dots} />

                {isEditing ? (
                   <CanvasForm
                   text={cardText}
                   onChange={handleChange}
                   saveCard={saveCard}
                 >
                 </CanvasForm>
                ) : (
                  <div >
                    <div id={id}>{text}</div>
                  </div>
                )}
                <DeleteButton
                  className={isEditing ? "deleteBtnV" : "deleteBtnN"}
                  onMouseDown={handleDeleteCard}
                >
                  <img style={{ width: "1rem" }} src={trash} />
                </DeleteButton>
              </CardDiv>
            </CardContainer>
          )}
        </Draggable>
      );
    };

    return renderCard();
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CanvasCard);
