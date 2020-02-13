import styled from "styled-components";

const CardContainer = styled.div`
  margin-bottom: 0.5rem;
  position: relative;
  max-width: 100%;
  word-break: break-word;
  transition: max-width 0.5s ;

  ${props =>
    props.isDragging
      ? `border:1px solid #1B85E5;
    box-shadow: 5px 5px 15px -5px rgba(27,133,229,0.3);  
    max-width: 20rem;
   
    `
      : `border:1px solid #3e3e3e;
    box-shadow: none;
    max-width: 100%;

   
    `};
`;

const DeleteButton = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
const CardDiv = styled.div`
  align-items: center;
  background: #3e3e3e;
  color: #969696;
  padding: 1rem;
  padding-right: 2rem;
  display: flex;
 
  .deleteBtnN {
    display: none;

    height: 1rem;
  }
  .deleteBtnV {
    display: block;
    position: absolute;
    right: 1.3rem;
    top: 1rem;
  }

  :hover {
    // padding-right: 0rem;

    .deleteBtnV {
      display: block;
      position: absolute;
      right: 1.3rem;
      top: 1rem;
    }
    .deleteBtnN {
      display: block;
      position: absolute;
      right: 1.3rem;
      top: 1rem;
    }
  }
`;
const DotsImg = styled.img`
  margin-right: 0.5rem;
  ${props =>
    props.isDragging
      ? `filter: invert(45%) sepia(42%) saturate(4229%) hue-rotate(190deg) brightness(94%) contrast(91%);`
      : ``};
`;
export { CardDiv, DotsImg, CardContainer, DeleteButton };
