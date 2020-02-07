import React, { useState, useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import { actionsCard } from "../../../bus/card/actions";

import { CardDiv, DotsImg, CardContainer, DeleteButton } from "./styles";

import CanvasForm from "../CanvasForm/index";

import trash from "../../../static/trash.svg";
import dots from "../../../static/dots.svg";

const mapStateToProps = state => ({
  cardList: state.updateCardReducer.get("cardList"),

});

const mapDispatchToProps = {
  editCard: actionsCard.editCard,
  deleteCard: actionsCard.deleteCard,
  addCard: actionsCard.addCard
};

const CanvasCard = React.memo(
  ({ text, listID, id, index, editCard, deleteCard, cardList }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [cardText, setcardText] = useState(text);
    const [select, setSelect] = useState(false);
    const [coords, setCoords] = useState([0, 0]);

    const _showSelection = () => {
      if (window.getSelection().toString() !== "") {
        setSelect(true);
        const parentEl = window.getSelection().anchorNode.parentElement;

        setCoords([parentEl.offsetHeight + 10 + "px", 5 + "px"]);
      } else {
        setSelect(false);
      }
    };

    const valRef = useRef(cardText);

    const _handleDeleteCard = () => {
      deleteCard([{ id, listID }, ...cardList]);
    };

    const _handleChange = e => {
      setcardText(e.target.value);
      valRef.current = e.target.value;
    };

    const _saveCard = e => {
      e.preventDefault();
      editCard([{ id, listID, cardText: valRef.current }, ...cardList]);
      setIsEditing(false);
      setSelect(false);
    };

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
                white="white"
                cardText={cardText}
                handleChange={_handleChange}
                showSelection={_showSelection}
                isEditing={isEditing}
                saveCard={_saveCard}
                coords={coords}
                select={select}
              />
              <DeleteButton
                className={isEditing ? "deleteBtnV" : "deleteBtnN"}
                onMouseDown={_handleDeleteCard}
              >
                <img style={{ width: "1rem" }} src={trash} alt="trash" />
              </DeleteButton>
            </CardDiv>
            {provided.placeholder}
          </CardContainer>
        )}
      </Draggable>
    );
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CanvasCard);
