import React, { useEffect, useState } from "react";

import { Container, MainTitle, Header, Button , BorderButton} from "./styles";
import { Portal } from "react-portal";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { actionsCard } from "../../bus/card/actions";

import html2pdf from "html2pdf.js";
import { connect } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import ShareComponent from "../_popup/Share";
import SendPdfComponent from "../_popup/SendPdf";
import BlockSegmentsComponent from "./BlockSegments";


import trash from '../../static/trash.svg'

const mapStateToProps = state => ({
  cardList: state.updateCardReducer.get("cardList")
});
const mapDispatchToProps = {
  dragHappaned: actionsCard.dragHappaned,
  getList: actionsCard.getList
};

const Canvas = ({ dragHappaned, getList, cardList }) => {
  const [share, setShare] = useState(false);
  const [sendPdf, setSendPdf] = useState(false);

  useEffect(() => {
    getList();

    // const input = document.getElementById("divIdToPrint");
    // var doc = new jsPDF();
    // html2canvas(input,).then(canvas => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF('landscape' );
    //   pdf.addImage(imgData,'PNG',20,20);
    //   pdf.save("download.pdf");
    // });
    // var element = document.getElementById('divToPrint');
    // var opt = {
    //   margin:       0,
    //   filename:     'myfile.pdf',
    //   enableLinks:{mode: ['css', 'legacy']},
    //   image:        { type: 'jpeg', quality: 0.98 },
    //   html2canvas:  { scale: 2 },
    //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    // };
    // html2pdf().set(opt).from(element).save();
    // html2pdf(element, opt);
    // window.print()
  }, []);

  const onDragEnd = result => {
    const { destination, source, type } = result;
    if (!destination) {
      return;
    }
    dragHappaned([
      {
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        type
      },
      ...cardList
    ]);
  };
  const _toggleVisibilityShare = e => {
    const { id } = e.target;
    if (share && id !== "share") {
      return null;
    }

    setShare(!share);
  };
  const _toggleVisibilitySendPdf = e => {
    const { id } = e.target;
    if (sendPdf && id !== "sendPdf") {
      return null;
    }

    setSendPdf(!sendPdf);
  };

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
      _toggleVisibilityShare(e);
    }
  };

  return (
    <>
      <Container>
        <Header id="non-printable">
          <MainTitle>Lean Canvas</MainTitle>
          <BorderButton >
            <Button black={true} onClick={_mobileShare}>
              Share
            </Button>
            <Button
              onClick={_toggleVisibilitySendPdf}
            >
              Send PDF
            </Button>
            <Button black={true} onClick={_mobileShare} className="trash">
              <img src={trash}/>
            </Button>
          </BorderButton>
        </Header>
        <div id="printable">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
              droppableId="all-lists"
              direction="horizontal"
              type="list"
            >
              {provided => <BlockSegmentsComponent provided={provided} />}
            </Droppable>
          </DragDropContext>
        </div>
      </Container>

      {share && (
        <Portal>
          <ShareComponent togglePopup={_toggleVisibilityShare} />
        </Portal>
      )}
      {sendPdf && (
        <Portal>
          <SendPdfComponent togglePopup={_toggleVisibilitySendPdf} />
        </Portal>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
