import React, { useEffect, useState } from "react";

import { Portal } from "react-portal";
import { DragDropContext } from "react-beautiful-dnd";
// import lottie from "lottie-web";

import { useDispatch, useSelector } from "react-redux";

import BlockSegmentsComponent from "./BlockSegments/index";
import { actionsCard } from "../../bus/card/actions";

import ShareComponent from "../_popup/Share";
import SendPdfComponent from "../_popup/SendPdf";
import DeleteCanva from "../_popup/DeleteCanva";
import BorderBtn from "./BorderButton";
import { Container, MainTitle, Header } from "./styles";

import CreateNewCanvaComponent from "../_popup/CreateNew";
import { socket } from "../../REST/api";
import Verification from "../_popup/Verification";

//
const Canvas = ({}) => {
  const cardList = useSelector(state =>
    state.updateCardReducer.get("cardList")
  );
  const dispatch = useDispatch();

  // const [preloader, setPreloader] = useState(true);
  const [verification, setverification] = useState(false);

  const [mobile, setMobile] = useState(false);
  const [share, setShare] = useState(false);
  const [sendPdf, setSendPdf] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [createNewCanva, setcreateNewCanva] = useState(false);
  const [scrollTo, setscrollTo] = useState(false);
  const [scrollTo2, setscrollTo2] = useState(false);
  const [styles, setstyles] = useState({});

  useEffect(() => {
    const mobileS = window.screen.width <= 768;
    setMobile(mobileS);

    if (window.location.pathname === "/") {
      // if (
      //   localStorage.getItem("cardList") !== null ||
      //   localStorage.getItem("id") !== null
      // ) {
      //   dispatch(actionsCard.getList());
      // } else {
        _createNewCanva();
        _setBodyStyle(createNewCanva)

      // }
    } else {
     
      setverification(true);
      _setBodyStyle(verification)
    }

    if (mobileS) {
      window.addEventListener("scroll", _onScroll);
    }
  }, []);

  const _onDragEnd = result => {
    const { destination, source, type } = result;
    if (!destination) {
      return;
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
    if (verification) {
      setverification(false);
      // window.history.pushState(
      //   "object or string",
      //   "Title",
      //   window.location.href
      // );
    }
    _deleteCanva();
  };

  const _deleteCanva = () => {
    localStorage.removeItem("cardList");
    localStorage.removeItem("id");
    setDeleteVisible(false);
    _setBodyStyle(true);
    dispatch(actionsCard.getList());
  };
  const _verification = data => {
    if (data.statusCode === 400) {
      setverification();
    }
  };

  const stylesAfterScroll = {
    position: "fixed",
    bottom: "-10rem",
    top: "auto",

    zIndex: "100"
  };
  const stylesScroll = {
    position: "fixed",
    bottom: "0rem",
    top: "auto",

    zIndex: "100"
  };
  const stylesScrollMain = {
    position: "static",

    bottom: "auto",
    zIndex: "0"
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

        <div id="printable">
          <DragDropContext onDragEnd={_onDragEnd}>
            <BlockSegmentsComponent />
          </DragDropContext>
        </div>
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
