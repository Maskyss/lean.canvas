import React, { useEffect, useState } from "react";

import { Portal } from "react-portal";
import { DragDropContext } from "react-beautiful-dnd";

import { actionsCard } from "../../bus/card/actions";

import { connect,useStore } from "react-redux";


import BlockSegmentsComponent from "./BlockSegments/index";

import ShareComponent from "../_popup/Share";
import SendPdfComponent from "../_popup/SendPdf";
import DeleteCanva from "../_popup/DeleteCanva";
import BorderBtn from "./borderBtn";
import { Container, MainTitle, Header, Button, BorderButton } from "./styles";

import CreateNewCanvaComponent from "../_popup/CreateNew";
import { socket } from "../../REST/api";

// const mapStateToProps = state => ({
//   cardList: state.updateCardReducer.get("cardList"),
//   authData: state.updateAuthReducer.get("authData")

// });
// const mapDispatchToProps = {
//   dragHappaned: actionsCard.dragHappaned,
//   getList: actionsCard.getList,
// };
// dragHappaned, getList, cardList, authData, createCanvas
const Canvas = ({  }) => {

  const store = useStore().getState()


  const [mobile, setMobile] = useState(false);
  const [share, setShare] = useState(false);
  const [sendPdf, setSendPdf] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [createNewCanva, setcreateNewCanva] = useState(false);
  const [scrollTo, setscrollTo] = useState(false);
  const [scrollTo2, setscrollTo2] = useState(false);
  const [styles, setstyles] = useState({});

  useEffect(() => {
    setMobile(window.screen.width <= 768);
    if (
      localStorage.getItem("cardList") !== null ||
      localStorage.getItem("title") !== null
    ) {
      store.getList();
    } else {
      setcreateNewCanva(true);
      _setBodyStyle(createNewCanva);
    }
    if (window.screen.width <= 768) {
      window.addEventListener("scroll", _onScroll);
    }
  }, []);

  const _onDragEnd = result => {
    const { destination, source, type } = result;
    if (!destination) {
      return;
    }
    store.dragHappaned([
      {
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        type
      },
      ...store.cardList
    ]);
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
    // createCanvas()
    setcreateNewCanva(false);
    _setBodyStyle(createNewCanva);
    console.log('store -> ', store);
    socket.emit("createCanvas", { canvasData:store.cardList, password:'password',title:'title'})

   
  };

  const _deleteCanva = () => {
    localStorage.removeItem("cardList");
    localStorage.removeItem("title");
    setDeleteVisible(false);
    store.getList();
    
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
    </>
  );
};
// connect(mapStateToProps, mapDispatchToProps)
export default (Canvas);
