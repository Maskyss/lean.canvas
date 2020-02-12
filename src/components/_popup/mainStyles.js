import styled from "styled-components";
import { themes } from "../../theme/theme";

const BorderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  @media ${themes.device.mobileM} {

    #containerSendPdf,
    #containerDelete {
      height: 23rem !important;
    }
    #containerCreate{
      height: 40rem !important;
    }
  }
`;

const Container = styled.div`
  background-color: ${themes.colors.colorWhite};
  padding: 4rem;

  width: 60rem;
  height: 35rem;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 600px) {
    height: 31rem;
    width: 40rem;

    padding: 3rem !important;

    #copy {
      width: 10.5rem;
      height: 5rem;
    }
    #popupCreate{
      right: 10.5rem !important;
    }
  }

  @media ${themes.device.mobileM} {
    width: 95%;
    height: 30rem;
    #createNewC{
      font-size:2.5rem;
    }
  }
  @media (max-width:340px){
    #createNewC{
      font-size:2.4rem;
    }
  }
  @media (max-width:330px){
    #createNewC{
      font-size:2.3rem;
    }
  }
`;

const Close = styled.span`
  font-size: 5rem;
  height: auto;
  position: fixed;
  cursor: pointer;
  top: 0.5rem;
  right: 2rem;
  color: #0e0e0e;
  :hover {
    color: ${themes.colors.colorGray6};
  }
  @media ${themes.device.laptop} {
    top: 0.2rem;
    right: 1.5rem;
  }
  @media ${themes.device.tablet} {
    font-size: 4rem;
  }
`;
const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19rem;
  height: 6rem;
  background: ${props => (!props.blue ? "transparent" : "#1B85E5")};
  color: ${props => (!props.blue ? "#0E0E0E" : "white")};

  margin: 0 1rem;
  transition: background 0.5s, border 0.5s, color 0.5s;
  font-size: 1.7rem;
  font-weight: 600;
  border: 1px solid ${props => (!props.blue ? "#0E0E0E" : "#1B85E5")};

  :hover {
    background: ${themes.colors.colorBlue2};
    color: white;
    border: 1px solid ${themes.colors.colorBlue2};
  }
  @media ${themes.device.laptopL} {
    font-size: 1.4rem;
  }
  @media (max-width: 600px) {
    width: 10.5rem;
    height: 5rem;
  }

  .spinner {
    margin: 1rem auto;
  
    width: 2rem;
    height: 2rem;
  
    border: 2px solid #1B85E6;
    border-top: 2px solid white;
    border-radius: 100%;
  
    animation: spin 1s infinite linear;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
  
    to {
      transform: rotate(720deg);
    }
  }
`;

const MainTitle = styled.div`
  color: #0e0e0e;
  text-transform: uppercase;
  margin-bottom: 2rem;

  font-weight: bold;
  font-size: 4.2rem;
  line-height: 132.5%;

  @media ${themes.device.laptopL} {
    font-size: 3.2rem;
  }

  @media ${themes.device.mobileM} {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.div`
  font-size: 1.7rem;
  line-height: 171.7%;
  font-weight: 300;

  color: #969696;

  @media ${themes.device.mobileM} {
    font-size: 1.4rem;
    margin-bottom: 2rem !important;
  }

.hr-text {
  margin:1rem 0 2.5rem;
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: #969696;
  text-align: center;
  height: 1.5em;
  
  &:before {
    content: '';
  
    background:  #969696;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: #969696;

    padding: 0 .5em;
    line-height: 1.5em;
    background-color: white;
  }
}
`;
const PopupMessage =styled.div`
font-size:1.4rem;
width:19rem;
padding:1.5rem;text-align: center;
font-style: normal;
font-weight: normal;
position: absolute;
    right: 5rem;    z-index: 10;
    
    background:white;
    bottom: -1.3rem;
   box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.5);
:before { 
	content: ' '; 
	position: absolute; 
	width: 0; 
	height: 0; 
  right: 9rem;
	top: -10px; 
	border: 5px solid; 
  border-color: transparent transparent white;
  
}
`
export { Container, BorderContainer, Close, Button, Subtitle, MainTitle,PopupMessage };
