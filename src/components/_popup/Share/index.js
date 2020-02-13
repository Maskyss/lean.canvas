import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
  Container,
  BorderContainer,
  Button,
  PopupMessage,
  Close,
  Subtitle,
  MainTitle,
  Access,
  
  DivWithAccess
} from "../mainStyles";

import { ImageLink, DivShareMedia,TextCode, } from "./styles";

import telegram from "../../../static/media/Telegram.svg";
import facebook from "../../../static/media/Facebook.svg";
import linkedin from "../../../static/media/Linkedin.svg";


const PopupC1 = styled(PopupMessage)`
  right: 6rem;
  bottom: 8rem;
`;
const PopupC2 = styled(PopupMessage)`
  right: 6rem;
`;
const ShareComponent = ({ togglePopup }) => {
  const [copyLink, setCopyLink] = useState(false);
  const [copyCode, setCopyCode] = useState(false);

  const [mobile, setmobile] = useState(false);

  const [mainLink, setMainLink] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    setMainLink(window.location.href);
    setmobile(window.screen.width <= 530);
    setCode(localStorage.getItem("password"));
  }, []);

  const _copyLink = () => {
    setCopyLink(true);
    setCopyCode(false);

    navigator.clipboard.writeText(mainLink);
  };
  const _copyCode = () => {
    setCopyLink(false);

    setCopyCode(true);
    navigator.clipboard.writeText(code);
  };

  const imageSrc = [
    {
      image: facebook,
      link: "https://www.facebook.com/sharer/sharer.php?u=" + mainLink
    },

    {
      image: telegram,
      link: "https://telegram.me/share/url?url=" + mainLink
    },
    {
      image: linkedin,
      link: "http://www.linkedin.com/shareArticle?mini=true&url=" + mainLink
    }
  ];

  const _mobileShare = e => {
    const href = window.location.origin;
    const { id } = e.target;
    try {
      navigator.share({
        url: href,
        text: "Fulcrum",
        title: "Fulcrum"
      });
    } catch (err) {
      togglePopup(e);
    }
  };
  return (
    <BorderContainer onClick={togglePopup} id="share">
      <Container style={{ padding: "4rem 5rem 3rem" }}>
        <Close id='share'>&times;</Close>
        <MainTitle>Share</MainTitle>
        <Subtitle style={{ marginBottom: "2rem" }}>Copy this code to access this page</Subtitle>
        <DivWithAccess>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Access>Access code</Access>
            <TextCode>{code}</TextCode>
          </div>

          <Button onClick={_copyCode}>Copy</Button>
          {copyCode && <PopupC1>Code successfully copied!</PopupC1>}
        </DivWithAccess>
        <DivShareMedia>
          {mobile ? (
            <Button
              style={{ marginLeft: 0 }}
              blue
              onClick={e => _mobileShare(e)}
            >
              Share media
            </Button>
          ) : (
            <div>
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
            </div>
          )}
          <Button id="copy" blue onClick={() => _copyLink()}>
            Copy link
          </Button>
          {copyLink && <PopupC2>Link successfully copied!</PopupC2>}
        </DivShareMedia>
      </Container>
    </BorderContainer>
  );
};

export default ShareComponent;
