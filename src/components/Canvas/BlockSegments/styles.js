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
    @media ${themes.device.laptop} {
      height: 28rem;
    }

    @media ${themes.device.tablet} {
      width: 100%;
    }
    .droppable {
      height: 55%;
      margin: 0 3%;
      overflow: scroll;
      overflow-x: hidden;
    }
  }
`;

const SegmDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 0 1%;
  @media ${themes.device.tablet} {
    margin: 0;
    width: 100%;
  }
  .inDiv {
    margin-bottom: 5%;
    width: 100%;
    height: 30rem;
    @media ${themes.device.tablet} {
      margin-bottom: 1%;
      height: 28rem;
    }

    .droppable {
      height: 70%;
      margin: 0 3%;
      overflow: scroll;
      overflow-x: hidden;
    }
  }
`;
export { BlockSegments, SegmDiv };
