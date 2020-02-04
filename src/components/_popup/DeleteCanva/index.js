import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  Container,
  BorderContainer,
  Button,
} from "../mainStyles";
import {
  Close,
  Subtitle,
  MainTitle
} from "../../_popup/mainStyles";



const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};
const DeleteCanva = ({ togglePopup }) => {

 

  const _deleteCanva=()=>{

  }

  return (
    <BorderContainer onClick={togglePopup} id="delete">
      <Container id='containerDelete' style={{ padding: "4rem 5rem 3rem", height:'28rem' }}>
       <Close id="delete">&times;</Close>
        <MainTitle>Delete canva?</MainTitle>
        <Subtitle style={{ marginBottom: "4rem" }}>
        After deletion, you will not be able to recover data
        </Subtitle>
         <div style={{display:'flex',justifyContent: 'center'}}>
          <Button blue  id="delete">
            No
          </Button> 
          <Button onClick={() => _deleteCanva()} >
           Yes
          </Button> </div>
      </Container>
    </BorderContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCanva);
