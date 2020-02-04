import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import { actionsCard } from "../../../bus/card/actions";

import CanvasForm from "../CanvasForm/index";

import { CardDiv, DotsImg } from "./styles";

import dots from "../../../static/dots.svg";

const mapStateToProps = state => ({
  cardList: state.updateCardReducer.get("cardList")
});

const mapDispatchToProps = {
  editCard: actionsCard.editCard,
  addCard: actionsCard.addCard
};

const CanvasCardNoDragg = React.memo(({ text, listID, addCard, cardList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setcardText] = useState(text);
  const [select, setSelect] = useState(false);
  const [coords, setCoords] = useState([0, 0]);

  function showSelection() {
    // var e = window.event;
    // var posX = e.clientX - $("#border").offset().left;
    // var posY = e.clientY - $("#border").offset().top;

    if (window.getSelection().toString() !== "") {
      setSelect(true);
      const parentEl = window.getSelection().anchorNode.parentElement;
      // console.log(posY)
      // if (posY > 0) {
      //   console.log(posY)
      //   setCoords([parentEl.offsetHeight +10 + "px",5 + "px"]);
      // } else {
      // console.log(posY,parentEl.offsetHeight)

      setCoords([parentEl.offsetHeight + 100 + "px", 5 + "px"]);
      // }
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
    if (cardText) {
      setcardText(valRef.current);
      setIsEditing(false);
      setSelect(false);
      addCard([{ text: valRef.current, listID }, ...cardList]);
      setcardText("+");
    }

    return;
  };

  const openForm = () => {
    if (cardText === "+") {
      setcardText(" ");
    }
    setIsEditing(true);
  };

  const renderCard = () => {
    return (
      <CardDiv style={{ fontSize: "12px" }} onDoubleClick={() => openForm()}>
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
      </CardDiv>
    );
  };

  return renderCard();
});

export default connect(mapStateToProps, mapDispatchToProps)(CanvasCardNoDragg);
