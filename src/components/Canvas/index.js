import React, { useEffect, useState } from "react";

import { Portal } from "react-portal";
// import lottie from "lottie-web";

import { useDispatch, useSelector } from "react-redux";

import { actionsCard } from "../../bus/card/actions";
import { actionsAuth } from "../../bus/auth/actions";

import { socket } from "../../REST/api";

import BlockSegmentsComponent from "./BlockSegments/index";

import ShareComponent from "../_popup/Share";
import SendPdfComponent from "../_popup/SendPdf";
import DeleteCanva from "../_popup/DeleteCanva";
import BorderBtn from "./BorderButton";
import CreateNewCanvaComponent from "../_popup/CreateNew";
import Verification from "../_popup/Verification";

import { Container, MainTitle, Header } from "./styles";
import { stylesAfterScroll, stylesScrollMain, stylesScroll } from "../../utils";
const initState={

  problem:[],
  solution:[],
  keyMetrics:[],
  uniqueValueProposition:[],
  unfairAdvantage:[],
  channels:[],
  customerSegment:[],
  costStructure:[],
  revenueStreams:[],
}
const Canvas = () => {
  const cardList = useSelector(state =>
    state.updateCardReducer.get("cardList")
  );

  const { id: canvasId, accessToken: token } = useSelector(state =>
    state.updateAuthReducer.get("authData")
  );

  const dispatch = useDispatch();

  // const [preloader, setPreloader] = useState(true);
  const [verification, setverification] = useState(false);
  const [share, setShare] = useState(false);
  const [sendPdf, setSendPdf] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [createNewCanva, setcreateNewCanva] = useState(false);

  const [mobile, setMobile] = useState(false);

  const [scrollTo, setscrollTo] = useState(false);
  const [scrollTo2, setscrollTo2] = useState(false);
  const [styles, setstyles] = useState({});

  useEffect(() => {
    const mobileS = window.screen.width <= 768;

    setMobile(mobileS);

    if (window.location.pathname === "/") {
      _createNewCanva();
      
    } else {
      if (
        localStorage.getItem("id") !== window.location.pathname.substring(1)
      ) {
        setverification(true);
        _setBodyStyle(verification);
      } else {

        socket.emit(
          "joinCanvasRoom",
          {
            canvasId: localStorage.getItem("id"),
            password: localStorage.getItem("password")
          },
          data => {
            if (data.statusCode !== undefined) {
              setverification(true);
              _setBodyStyle(verification);

            } else {
              dispatch(actionsCard.setList(data.canvasData));
              dispatch(
                actionsAuth.setAuth({
                  id: data.id,
                  accessToken: data.tokens.accessToken,
                  refreshToken: data.tokens.refreshToken
                })
              );
              setTimeout(() => {
                socket.emit("refreshTokens", {
                  refreshToken: data.tokens.refreshToken
                },
                (data)=>{
                  if (data.statusCode !== undefined) {
                    console.log(data,'joinCanvasRoom:token')
                    window.alert("something wrong");
                  }
                });
              }, 12000000);
            }
          }
        );
      }
    }

    if (mobileS) {
      window.addEventListener("scroll", _onScroll);
    }
  }, []);

  const _onDragEnd = result => {
    const { destination, source, type } = result;
    if (!destination) {
      return null;
    }
    dispatch(
      actionsCard.dragHappaned([
        {
          droppableIdStart: source.droppableId,
          droppableIdEnd: destination.droppableId,
          droppableIndexStart: source.index,
          droppableIndexEnd: destination.index,
          type
        },
        cardList
      ])
    );

    socket.emit(
      "updateCanvas",
      { canvasId, canvasData: cardList, token },
      data => {
        console.log(data, "dragHappaned");
        if (data.statusCode !== undefined) {
          window.alert("something wrong");
        }
      }
    );
  };

  const _onScroll = () => {
    if (window.scrollY > 300) {
      setscrollTo(true);
      setTimeout(() => {
        setscrollTo2(true);
      }, 1000);
    }

    if (window.scrollY < 250 && window.scrollY > 5) {
      setscrollTo(false);

      setstyles(stylesAfterScroll);
      setTimeout(() => {
        setstyles(stylesScrollMain);
      }, 1000);
    }
  };

  const _toggleVisibility = (e, flag, idN) => {
    const { id } = e.target;
    if (flag && id !== idN) {
      return null;
    }

    switch (idN) {
      case "delete": {
        setDeleteVisible(!flag);
        break;
      }
      case "sendPdf": {
        setSendPdf(!flag);
        break;
      }
      case "share": {
        setShare(!flag);
        break;
      }
      default:
        break;
    }
    _setBodyStyle(flag);
  };

  const _setBodyStyle = flag => {
    const { body } = document;

    if (flag) {
      body.setAttribute("style", "overflow-y:auto");
    } else {
      body.setAttribute("style", "overflow-y:hidden");
    }
  };

  const _createNewCanva = () => {
    setcreateNewCanva(!createNewCanva);
    dispatch(actionsCard.setList(initState));

    if (verification) {
      setverification(false);
    }

    window.history.pushState(
      "object or string",
      "Title",
      window.location.origin
    );
    _setBodyStyle(createNewCanva);
  };

  const _deleteCanva = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("password");

    setDeleteVisible(false);
    _setBodyStyle(true);

    _createNewCanva();
  };
  const _verification = data => {
    dispatch(
      actionsAuth.setAuth({
        id: data.id,
        accessToken: data.tokens.accessToken,
        refreshToken: data.tokens.refreshToken
      })
    );
    setTimeout(() => {
      socket.emit("refreshTokens", {
        refreshToken: data.tokens.refreshToken
      },
      (data)=>{
        if (data.statusCode !== undefined) {
          console.log(data,'joinCanvasRoom:token')
          window.alert("something wrong");
        }
      }
      );
    }, 12000000);
    setverification(false);
    _setBodyStyle(true);
    dispatch(actionsCard.setList(data.canvasData));
  };

  return (
    <>
      {/* {preloader && (
        <Portal>
          <PreloaderComponent />
        </Portal>
      )} */}
      <Container>
        <Header id="non-printable">
          <MainTitle>Lean Canvas</MainTitle>
          <BorderBtn
            style={{}}
            _toggleVisibility={_toggleVisibility}
            share={share}
            sendPdf={sendPdf}
            deleteVisible={deleteVisible}
          />
        </Header>

            <BlockSegmentsComponent onDragEnd={_onDragEnd}/>
        {mobile && (
          <BorderBtn
            id="nonDiv"
            style={
              scrollTo ? (scrollTo2 ? stylesScroll : stylesAfterScroll) : styles
            }
            _toggleVisibility={_toggleVisibility}
            share={share}
            sendPdf={sendPdf}
            deleteVisible={deleteVisible}
          />
        )}
      </Container>

      {share && (
        <Portal>
          <ShareComponent
            togglePopup={e => _toggleVisibility(e, share, "share")}
          />
        </Portal>
      )}
      {sendPdf && (
        <Portal>
          <SendPdfComponent
            togglePopup={e => _toggleVisibility(e, sendPdf, "sendPdf")}
          />
        </Portal>
      )}
      {deleteVisible && (
        <Portal>
          <DeleteCanva
            togglePopup={e => _toggleVisibility(e, deleteVisible, "delete")}
            deleteCanva={_deleteCanva}
          />
        </Portal>
      )}
      {createNewCanva && (
        <Portal>
          <CreateNewCanvaComponent createNewCanva={_createNewCanva} />
        </Portal>
      )}
      {verification && (
        <Portal>
          <Verification
            verification={_verification}
            createNewCanva={_createNewCanva}
          />
        </Portal>
      )}
    </>
  );
};
//
export default Canvas;
