import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  Container,
  BorderContainer,
  Button,
} from "../mainStyles";
import { ImageLink } from "./styles";

import PopupStandard from "../../_shared/PopupStandard";

import telegram from "../../../static/Telegram.svg";
import facebook from "../../../static/Facebook.svg";
import twitter from "../../../static/Twitter.svg";
import linkedin from "../../../static/Linkedin.svg";

const mapStateToProps = state => ({
  // cardList: state.updateCardReducer.get("cardList")
});
const mapDispatchToProps = {
  // dragHappaned: actionsCard.dragHappaned,
  // getList: actionsCard.getList
};
const ShareComponent = ({ togglePopup }) => {
  const [copy, setCopy] = useState(false);
  const [mainLink, setMainLink] = useState("");
  const [code, setCode] = useState("k21jisru14141");

  useEffect(() => {
    setMainLink(window.location.host);
  }, []);

  const _copyText = () => {
    setCopy(true);
    navigator.clipboard.writeText(code);
  };
  const imageSrc = [
    { image: twitter, link: "https://twitter.com/intent/tweet?text=" },

    {
      image: facebook,
      link:
        "https://www.facebook.com/dialog/send?app_id=1390387391030778&display=popup&redirect_uri=" +
        mainLink +
        "&link="
    },

    {
      image: telegram,
      link: "https://telegram.me/share/url?url="
    },
    {
      image: linkedin,
      link: ""
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

  return (
    <BorderContainer onClick={togglePopup} id="share">
      <Container style={{ padding: "4rem 5rem 3rem" }}>
        <PopupStandard {...arrPopup} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {imageSrc.map((item, i) => {
              return (
                <ImageLink
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
          </div>
          <Button blue onClick={() => _copyText()}>
            {copy ? "Copied" : "Copy link"}
          </Button>
        </div>
      </Container>
    </BorderContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareComponent);
