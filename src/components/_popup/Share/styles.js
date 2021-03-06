import styled from "styled-components";
import { themes } from "../../../theme/theme";

const ImageLink = styled.a`
  background: ${themes.colors.colorGray7};

  width: 6rem;
  height: 6rem;
  margin: 0 0.5rem;
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
  }
  :hover {
    background: ${themes.colors.colorGray3};
    img {
      filter: brightness(3);
    }
  }
  @media (max-width: 600px) {
    width: 5rem;
    height: 5rem;
  }
  @media ${themes.device.tablet} {
    float: left;
  }
  @media (max-width: 470px) {
    margin: 0 0.5rem;
  }
`;

const DivShareMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${themes.device.tabletS} {
    justify-content: center;
  }
`;
const TextCode = styled.div`
  font-size: 1.7rem;
  width: 27rem;
  padding-bottom: 1.3rem;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  border-bottom: 1px solid #0e0e0e;
  @media (max-width: 600px) {
    width: 15rem;
  }
`;
export { ImageLink, DivShareMedia, TextCode };
