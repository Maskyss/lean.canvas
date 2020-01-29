import styled from "styled-components";
import { themes } from "../../theme/theme";
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
margin-bottom:5rem;
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
  margin: 0 1rem;
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

  @media ${themes.device.mobileM} {
    font-size: 3.2rem;
    margin-bottom: 2rem;
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

  padding: 10rem 10%;

  @media ${themes.device.laptopL} {
    padding: 10rem 15%;
  }

  @media ${themes.device.laptopS} {
    padding: 10rem 10% 1rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media ${themes.device.tabletS} {
    padding: 7rem 5% 4rem;
  }
`;
const Segment = styled.div`
  background: #3e3e3e;
  width:30rem;
  padding:3rem 2rem;
  margin-bottom:1%;

  
`;
const WithImage = styled.div`
display:flex;
align-items: center;

`;
const Image = styled.img`
 margin-right:8%;

`; 

const Title = styled.div`
color: ${themes.colors.colorWhite};
  text-transform: uppercase;

  font-weight: bold;
  font-size: 1.7rem;
  line-height: 132.5%;

`;
const BlockSegments = styled.div`
display:flex;

.long{
  width:50%;
  height:28rem;
}
`

const SegmDiv =styled.div`
display: flex; 
flex-direction: column; width:30rem;
margin:0 1%;
.inDiv{
  margin-bottom:5%;
  width:100%;
  height:30rem;
}


`
export {
  Container,
  MainTitle,
  Subtitle,
  Header,
  Button,
  Segment,
  WithImage,
  Image,
  Title,BlockSegments,SegmDiv
};
