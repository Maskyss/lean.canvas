import React from "react";

import { Close, Button, Subtitle, MainTitle } from "../../_popup/mainStyles";
import { Access, TextCode, DivWithAccess } from "./styles";
import styled from "styled-components";

import {
 PopupMessage
} from "../../_popup/mainStyles";

const PopupC = styled(PopupMessage)`
right: 6rem;
bottom: 8rem;
`
const PopupStandard = ({
  id,
  title,
  subt,
  accsCode,
  textC,
  flagCopy,
  textClick,
  funcAction
}) => {
  return (
    <>
      <Close id={id}>&times;</Close>
      <MainTitle>{title}</MainTitle>
      <Subtitle style={{ marginBottom: "2rem" }}>{subt}</Subtitle>
      <DivWithAccess>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Access>{accsCode}</Access>
          <TextCode>{textC}</TextCode>
        </div>

        <Button onClick={funcAction}>
          {textClick}
        </Button>
        {flagCopy &&<PopupC>Code successfully copied!</PopupC>}
      </DivWithAccess>
    </>
  );
};

export default PopupStandard;
