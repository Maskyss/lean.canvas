import React from "react";

import {
    Close,
    Button,
    Subtitle,
    MainTitle
  } from "../../_popup/mainStyles";
  import {  Access, TextCode, DivWithAccess } from "./styles";


const PopupStandard = ({ id, title, subt, accsCode, textC, clickAction, textClick, funcAction }) => {


    return(
        <>
        <Close id={id}>&times;</Close>
        <MainTitle>{title}</MainTitle>
        <Subtitle style={{ marginBottom: "4rem" }}>
          {subt}
        </Subtitle>
        <DivWithAccess >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Access>{accsCode}</Access>
            <TextCode>{textC}</TextCode>
          </div>

          <Button onClick={() => funcAction()}>
            {clickAction ? textClick[1] : textClick[0]}
          </Button>
        </DivWithAccess>
        </>
    );
}


export default PopupStandard;
