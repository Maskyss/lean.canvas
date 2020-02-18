import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionsCard } from "../../../bus/card/actions";
import { socket } from "../../../REST/api";
import { Portal } from "react-portal";
import PopupError from "../../_popup/PopupError";
import CanvasForm from "../CanvasForm/index";

import { CardDiv, DotsImg } from "./styles";

import dots from "../../../static/dots.svg";

const CanvasCardNoDragg = ({ text, listID }) => {
  const cardList = useSelector(state =>
    state.updateCardReducer.get("cardList")
  );
  const {id:canvasId,accessToken:token } = useSelector(
    state => state.updateAuthReducer.get("authData")
  );
  // const token = useSelector(
  //   state => state.updateAuthReducer.get("authData").accessToken
  // );

  const dispatch = useDispatch();
  const [error, seterror] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setcardText] = useState(text);
  const [select, setSelect] = useState(false);
  const [coords, setCoords] = useState([0, 0]);

  function showSelection() {
    

    if (window.getSelection().toString() !== "") {
      setSelect(true);
      const parentEl = window.getSelection().anchorNode.parentElement;
    

      setCoords([parentEl.offsetHeight + 100 + "px", 5 + "px"]);
    } else {
      setSelect(false);
    }
  }

  const valRef = useRef(cardText);

  const handleChange = e => {
    setcardText(e.target.value);
    valRef.current = e.target.value;
  };

  const handleAddCard = () => {
    if (valRef.current === "") {
      setcardText("+");

      setIsEditing(false);
      setSelect(false);
    } else {
      setcardText(valRef.current);
      setIsEditing(false);
      setSelect(false);
      dispatch(
        actionsCard.addCard([{ text: valRef.current, listID }, cardList])
      );
      socket.emit(
        "updateCanvas",
        { canvasId, canvasData: cardList, token },
        data => {
          console.log(data, 'addCard')

          if (data.statusCode !== undefined) {
            window.alert("something wrong");
          }
        }
      );
      setcardText("+");
    }

    return null;
  };

  const openForm = () => {
    if (cardText === "+") {
      setcardText("");
    }
    setIsEditing(true);
  };

  const renderCard = () => {
    return (
      <>
      {error && (
        <Portal>
          <PopupError
          />
        </Portal>
      )}
      <CardDiv style={{ fontSize: "12px" }} onClick={() => openForm()}>
        <DotsImg src={dots} />

        <CanvasForm
          cardText={cardText}
          handleChange={handleChange}
          showSelection={showSelection}
          isEditing={isEditing}
          saveCard={handleAddCard}
          coords={coords}
          select={select}
        />
      </CardDiv> </>
    );
   
  };

  return renderCard();
};

export default CanvasCardNoDragg;
