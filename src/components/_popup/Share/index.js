import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  Container,
  BorderContainer,
  Button,
} from "../mainStyles";
import { ImageLink,DivShareMedia } from "./styles";

import PopupStandard from "../../_shared/PopupStandard";

import telegram from "../../../static/media/Telegram.svg";
import facebook from "../../../static/media/Facebook.svg";
import linkedin from "../../../static/media/Linkedin.svg";

const mapStateToProps = state => ({
  // cardList: state.updateCardReducer.get("cardList")
});
const mapDispatchToProps = {
  // dragHappaned: actionsCard.dragHappaned,
  // getList: actionsCard.getList
};
const ShareComponent = ({ togglePopup }) => {
  const [copy, setCopy] = useState(false);
  const [mobile, setmobile] = useState(false);

  const [mainLink, setMainLink] = useState("");
  const [code, setCode] = useState("k21jisru14141");

  useEffect(() => {
    setMainLink(window.location.host);
    setmobile(window.screen.width<=530)
  }, []);

  const _copyText = () => {
    setCopy(true);
    navigator.clipboard.writeText(code);
  };
  const imageSrc = [
    {
      image: facebook,
      link:
        "https://www.facebook.com/sharer/sharer.php?u="+"https%3A%2F%2Ffulcrum.rocks%2Fblog%2Fwhy-israeli-companies-should-be-outsourcing-to-ukraine"
        //  +
        // mainLink +
        // "&link="
    },

    {
      image: telegram,
      link: "https://telegram.me/share/url?url="
    },
    {
      image: linkedin,
      link: "http://www.linkedin.com/shareArticle?mini=true&url="+
      "https%3A%2F%2Ffulcrum.rocks%2Fblog%2Fwhy-israeli-companies-should-be-outsourcing-to-ukraine"+"&"+"title="+"https%3A%2F%2Ffulcrum.rocks%2Fblog%2Fwhy-israeli-companies-should-be-outsourcing-to-ukraine"
    }
  ];

  const arrPopup = {
    id: "share",
    title: "Share",
    subt: " Copy this code to access this page",
    accsCode: "Access code",
    textC: code,
    clickAction:copy,
    textClick: ["Copy", "Copied"],
    funcAction: _copyText,
    input:false
  };
  const _mobileShare = e => {
    const href = window.location.origin;
    const { id } = e.target;
    try{
      navigator.share({
        url: href,
        text: "Fulcrum",
        title: "Fulcrum"
      });}
      catch(err){
        togglePopup(e)
      }
   
  };
  return (
    <BorderContainer onClick={togglePopup} id="share">
      <Container style={{ padding: "4rem 5rem 3rem" }}>
        <PopupStandard {...arrPopup} />
        <DivShareMedia >
         {mobile?
         <Button  style={{marginLeft:0}} blue onClick={e => _mobileShare(e)}>
        Share media
       </Button>
         : <div>
            {imageSrc.map((item, i) => {
              return (
                <ImageLink
                target="_blank"
                rel="noopener noreferrer"
                  style={
                    i === 0
                      ? { marginLeft: 0, backgroundColor: item.color }
                      : { backgroundColor: item.color }
                  }
                  href={item.link + mainLink}
                  key={i}
                >
                  <img src={item.image} alt="img" />
                </ImageLink>
              );
            })}
          </div>}
          <Button id='copy' blue onClick={() => _copyText()}>
            {copy ? "Copied" : "Copy link"}
          </Button>
        </DivShareMedia>
      </Container>
    </BorderContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareComponent);
