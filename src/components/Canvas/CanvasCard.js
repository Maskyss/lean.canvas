import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import $ from "jquery";

import { actionsCard } from "../../bus/card/actions";
import { CardDiv, DotsImg } from "./styles";
import CanvasForm from "./CanvasForm";

import trash from "../../static/trash.svg";
import dots from "../../static/dots.svg";

const CardContainer = styled.div`
  margin-bottom: 0.5rem;
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

const mapStateToProps = state => ({
  cardList: state.updateCardReducer.get("cardList")
});

const mapDispatchToProps = {
  editCard: actionsCard.editCard,
  deleteCard: actionsCard.deleteCard,
  addCard: actionsCard.addCard
};

const CanvasCard = React.memo(
  ({ text, listID, id, index, editCard, deleteCard, addCard, cardList }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [cardText, setcardText] = useState(text);
    const [select, setSelect] = useState(false);
    const [coords, setCoords] = useState([0, 0]);

    function showSelection() {
      var e = window.event;
      var posX = e.clientX - $("#border").offset().left;
      var posY = e.clientY - $("#border").offset().top;

      if (window.getSelection().toString() !== "") {
        setSelect(true);
        const parentEl = window.getSelection().anchorNode.parentElement;

        if (posY > 0) {
          setCoords([posY + 20 + "px",posX + "px"]);
        } else {
          setCoords([parentEl.offsetHeight + "px", 5 + "px"]);
        }
      } else {
        setSelect(false);
      }
    }

    const valRef = useRef(cardText);

    const handleDeleteCard = e => {
      deleteCard([{ id, listID }, ...cardList]);
    };

    const handleChange = e => {
      setcardText(e.target.value);
      valRef.current = e.target.value;
    };

    const saveCard = e => {
      e.preventDefault();
      editCard([{ id, listID, cardText: valRef.current }, ...cardList]);
      setIsEditing(false);
      setSelect(false);
    };

    const renderCard = () => {
      return (
        <Draggable
          draggableId={String(id)}
          index={index}
          shouldRespectForceTouch={false}
        >
          {(provided, snapshot) => (
            <CardContainer
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              <CardDiv
                style={{ fontSize: "12px" }}
                onDoubleClick={() => setIsEditing(true)}
              >
                <DotsImg isDragging={snapshot.isDragging} src={dots} />

                <CanvasForm
                  cardText={cardText}
                  handleChange={handleChange}
                  showSelection={showSelection}
                  isEditing={isEditing}
                  saveCard={saveCard}
                  coords={coords}
                  select={select}
                />
                <DeleteButton
                  className={isEditing ? "deleteBtnV" : "deleteBtnN"}
                  onMouseDown={handleDeleteCard}
                >
                  <img style={{ width: "1rem" }} src={trash} alt='trash'/>
                </DeleteButton>
              </CardDiv>
              {provided.placeholder}
            </CardContainer>
          )}
        </Draggable>
      );
    };

    return renderCard();
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CanvasCard);
