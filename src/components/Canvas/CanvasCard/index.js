import React, { useState, useRef, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";

import { actionsCard } from "../../../bus/card/actions";

import { CardDiv, DotsImg, CardContainer, DeleteButton } from "./styles";
import { socket } from "../../../REST/api";

import CanvasForm from "../CanvasForm/index";

import trash from "../../../static/trash.svg";
import dots from "../../../static/dots.svg";

const CanvasCard = ({ text, listID, id, index }) => {
  const cardList = useSelector(state =>
    state.updateCardReducer.get("cardList")
  );
  const { id: canvasId, accessToken: token } = useSelector(state =>
    state.updateAuthReducer.get("authData")
  );

  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setcardText] = useState(text);
  const [select, setSelect] = useState(false);
  const [coords, setCoords] = useState([0, 0]);

  useEffect(() => {
    setcardText(text);
  }, [text]);
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
    dispatch(actionsCard.deleteCard([{ id, listID }, cardList]));

    socket.emit(
      "updateCanvas",
      { canvasId, canvasData: cardList, token },
      data => {
        console.log(data, "deleteCard");

        if (data.statusCode !== undefined) {
          window.alert("something wrong");
        }
      }
    );
  };

  const _handleChange = e => {
    setcardText(e.target.value);
    valRef.current = e.target.value;
  };

  const _saveCard = e => {
    e.preventDefault();
    dispatch(
      actionsCard.editCard([{ id, listID, cardText: valRef.current }, cardList])
    );

    socket.emit(
      "updateCanvas",
      { canvasId, canvasData: cardList, token },
      data => {
        console.log(data, "editCard");

        if (data.statusCode !== undefined) {
          window.alert("something wrong");
        }
      }
    );

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
            onClick={() => setIsEditing(true)}
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
};

export default CanvasCard;
