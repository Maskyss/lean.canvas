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
  @media ${themes.device.tablet} {
    float: left;
  }
  @media (max-width: 470px) {
    margin: 0 0.5rem;
  }

  @media (max-width: 385px) {
    width: 4rem;
    height: 4rem;
  }
`;


export { ImageLink};
