import React from "react";

import { ButtonImg, BorderButton, StyledTextArea } from "./styles";

import underline from "../../../static/underline.svg";
import bold from "../../../static/bold.svg";
import italic from "../../../static/italic.svg";

const CanvasForm = ({
  white,
  cardText = "",
  handleChange,
  showSelection,
  select,
  coords,
  isEditing,
  saveCard
}) => {
  function EditButton(props) {
    return (
      <ButtonImg
        src={props.src}
        key={props.cmd}
        onMouseDown={evt => {
          evt.preventDefault();
          document.execCommand(props.cmd, false, props.arg);
        }}
      />
    );
  }
  return (
    <>
      <StyledTextArea
        style={{ fontSize: "12px", color: white }}
        onChange={handleChange}
        onBlur={saveCard}
        tagName="div"
        html={cardText}
        disabled={!isEditing}
        onSelect={showSelection}
        id="border"
      />
      {select && (
        <BorderButton top={coords[0]} left={coords[1]}>
          <EditButton cmd="bold" src={bold} />
          <EditButton cmd="italic" src={italic} />
          <EditButton cmd="underline" src={underline} />
        </BorderButton>
      )}
    </>
  );
};

export default CanvasForm;
