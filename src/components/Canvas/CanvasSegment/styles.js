import styled from "styled-components";
import { themes } from "../../../theme/theme";

const Segment = styled.div`
  background: #292929;
  width: 30rem;
  margin-bottom: 1%;
  position: relative;
  @media ${themes.device.tablet} {
    width: 100%;
    height: 28rem;
  }

  .droppable {
    height: 85%;
    margin: 0 3%;
    overflow: scroll;
    overflow-x: hidden;
    @media ${themes.device.tablet} {
      height: 70%;
    }
  }
`;
const WithImage = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 2rem 1rem;
  @media ${themes.device.laptop} {
    margin: 2rem 1rem;
  }
`;
const Image = styled.img`
  margin-right: 8%;
`;

const Title = styled.div`
  color: ${themes.colors.colorWhite};
  text-transform: uppercase;

  font-weight: bold;
  font-size: 1.7rem;
  line-height: 132.5%;
  @media ${themes.device.laptop} {
    font-size: 1.4rem;
    word-break: break-word;
  }
`;

export { Segment, WithImage, Image, Title };
