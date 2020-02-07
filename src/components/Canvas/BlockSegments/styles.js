import styled from "styled-components";
import { themes } from "../../../theme/theme";

const BlockSegments = styled.div`
  display: flex;
  padding: 0 10%;

  @media ${themes.device.laptop} {
    padding: 0 5%;
  }
  @media ${themes.device.tablet} {
    padding: 0 7%;
    flex-direction: column;
  }
  @media ${themes.device.tabletS} {
    padding: 0 3%;
  }

  .long {
    width: 50%;
    height: 28rem;
    img{
      margin-right:2%;
    }
    @media ${themes.device.laptop} {
      height: 28rem;
    }

    @media ${themes.device.tablet} {
      width: 100%;
    }
    .droppable {
      .inDroppable{
      height: 100%;
      }
      height: 55%;
      margin: 0 3%;
      overflow: scroll;
      overflow-x: hidden;
      button{
        display:none !important;
      }
    }
  }
`;

const SegmDiv = styled.div`
  @media (min-width:1921px){
    width: 20%;
  }
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 0 1rem;

  @media ${themes.device.tablet} {
    margin: 0;
    width: 100%;
  }
  .inDiv {
    margin-bottom: 1rem;
    width: 100%;
    height: 30rem;
    @media ${themes.device.tablet} {
      height: 28rem;
    }

    .droppable {
      .inDroppable{
        height: 100%;
        }
      height: 70%;
      margin: 0 3%;
      overflow: scroll;
      overflow-x: hidden;
      button{
        display:none !important;
      }
    }
  }
`;
export { BlockSegments, SegmDiv };
