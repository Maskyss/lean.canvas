import React from "react";
import styled from "styled-components";

import { StyledTextArea } from "./styles";

import underline from "../../static/underline.svg";
import bold from "../../static/bold.svg";
import italic from "../../static/italic.svg";

const ButtonImg = styled.img`
  padding: 0.5rem;
  background: #323232;
  border: 1px solid #7c7c7c;
`;
const BorderButton = styled.div`
  background: #3e3e3e;
  padding: 1rem;
  display: flex;

  position: absolute;
  display: flex;
  z-index: 10;

  top: ${props => props.top};
  left: ${props => props.left};
`;

const CanvasForm = ({
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
        style={{ fontSize: "12px" }}
        onChange={React.useCallback(handleChange)}
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
