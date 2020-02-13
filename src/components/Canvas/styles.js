import styled from "styled-components";
import { themes } from "../../theme/theme";

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  padding: 6rem 10% 0;

  @media ${themes.device.laptopL} {
    padding: 6rem 15% 0;
  }

  @media ${themes.device.laptopS} {
    padding: 6rem 10% 0;
  }
  @media ${themes.device.tablet} {
    padding: 4rem 7% 0;

    flex-direction: column;
    align-items: flex-start;
    height:20rem;
  }
  @media ${themes.device.tabletS} {
    padding: 4rem 3% 0;
    margin-bottom: 3rem;
    height:17rem;

  }
`;
const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  width: 19rem;
  height: 7rem;
  background: ${props => (props.black ? "transparent" : "white")};
  color: ${props => (props.black ? "white" : themes.colors.mainColor)};
  margin: 0 0.5rem;
  transition: background 0.5s, border 0.5s, color 0.5s;
  font-size: 1.7rem;
  font-weight: 600;

  :hover {
    background: ${themes.colors.colorBlue2};
    border: 1px solid ${themes.colors.colorBlue2};
    color: white;
  }
  @media ${themes.device.laptopL} {
    font-size: 1.4rem;
  }
  @media ${themes.device.laptop} {
    width: 15rem;
    height: 4.5rem;
  }
  @media ${themes.device.mobileL} {
    width: 14rem;
  }
  @media (max-width: 370px) {
    width: 13rem;
  }
  @media (max-width: 345px) {
    width: 12rem;
    margin: 0 0.3rem;
  }
`;

const MainTitle = styled.h1`
  color: ${themes.colors.colorWhite};
  text-transform: uppercase;
  position: relative;

  font-weight: bold;
  font-size: 6.4rem;
  line-height: 132.5%;

  @media ${themes.device.laptopL} {
    font-size: 4.8rem;
  }

  @media ${themes.device.tablet} {
    margin-bottom: 2rem;
  }
  @media ${themes.device.mobileM} {
    font-size: 3.2rem;
  }
`;

const Subtitle = styled.div`
  font-size: 2rem;
  line-height: 171.7%;
  font-weight: 300;
  text-align: center;
  width: 100%;
  white-space: pre-wrap;
  color: ${themes.colors.colorGray};

  @media ${themes.device.laptopL} {
    font-size: 1.7rem;
  }

  @media ${themes.device.mobileM} {
    font-size: 1.4rem;
  }
`;

const Container = styled.div`
  height: auto;
  width: 100%;
  background: ${themes.colors.mainColor};
  #nonDiv{
    padding-left: 10% ;
    padding-right: 10% ;


  @media ${themes.device.laptopL} {
    padding-left: 15% ;
    padding-right: 15% ;
  }

  @media ${themes.device.laptopS} {
    padding-left: 10% ;
    padding-right: 10% ;
  }
  @media ${themes.device.tablet} {
    padding-left: 7% ;
    padding-right: 7% ;

  }
  @media ${themes.device.tabletS} {
    padding-left: 3% ;
    padding-right: 3% ;
    
  }
  }
`;

const ButtonController = styled.div`
  display: block;
  position: absolute;
  right: 1.3rem;
  bottom: 1rem;
  cursor: pointer;
  color: white;
  :hover {
  }
`;
const Block = styled.div`
 
`;

const BorderButton = styled.div`
  display: flex;
  
  @media ${themes.device.tablet}{
    width:100%;
    background: #0e0e0e;
    position:static;
    padding:1rem 0;
    z-index:0;
    transition:bottom 0.5s;
  }
 
  .trash {
    width: 7rem !important;
    margin-right: 0;
    @media ${themes.device.laptop} {
      width: 4.5rem !important;
      img {
        width: 1rem;
      }
    }
  }
`;

export {
  Container,
  MainTitle,
  Subtitle,
  Header,
  Button,
  ButtonController,
  Block,
  BorderButton
};
