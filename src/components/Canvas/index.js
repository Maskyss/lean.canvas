import React, { Component, useEffect, useState } from "react";
import $ from "jquery";
import {
  Container,
  MainTitle,
  Header,
  Segment,
  Button,
  Subtitle,
  WithImage,
  Image,
  Title,
  BlockSegments,
  SegmDiv
} from "./styles";
import { Portal } from "react-portal";

import html2pdf from "html2pdf.js";
import { connect } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import img0 from "../../static/0.svg";
import img01 from "../../static/01.svg";
import img1 from "../../static/1.svg";
import img2 from "../../static/2.svg";

import img3 from "../../static/3.svg";
import img4 from "../../static/4.svg";
import img5 from "../../static/5.svg";
import img6 from "../../static/6.svg";

import img7 from "../../static/7.svg";
import ShareComponent from "../_popup/Share";
import SendPdfComponent from "../_popup/SendPdf";

const mapStateToProps = state => ({
  // cardList: state.updateCardReducer.get("cardList")
});
const mapDispatchToProps = {
  // dragHappaned: actionsCard.dragHappaned,
  // getList: actionsCard.getList
};
const Canvas = ({}) => {
  const [share, setShare] = useState(false);
  const [sendPdf, setSendPdf] = useState(false);

  useEffect(() => {
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

  const segments = [
    [
      {
        title: "Problem",
        subtitle: "List your top 1-3 problems",
        img: img0
      }
    ],
    [
      {
        title: "Solution",
        subtitle: "Outline a possible solution for each problem",
        img: img01
      },
      {
        title: "Key Metrics",
        subtitle: "List the key numbers that tell you how business is doing",
        img: img1
      }
    ],
    [
      {
        title: "Unique Value Proposition",
        subtitle:
          "Signle, clear, cometting message that states why you are different and worth paying attention",
        img: img2
      }
    ],
    [
      {
        title: "Unfair Advantage",
        subtitle: "Something that cannot be easily brought or copied",
        img: img3
      },
      {
        title: "Channels",
        subtitle: "List your path to customers (Inbound or outbound)",
        img: img4
      }
    ],
    [
      {
        title: "Customer Segments",
        subtitle: "List your target customers and users",
        img: img5
      }
    ]
  ];
  const segments1 = [
    {
      title: "Cost Structure",
      subtitle: "List your fixed and variable costs.",
      img: img6
    },
    {
      title: "Revenue Streams",
      subtitle: "List your sources of revenue.",
      img: img7
    }
  ];

  const _toggleVisibilityShare = e => {
    const { id } = e.target;
    if (share && id !== "share") {
      console.log(share, id);
      return null;
    }

    setShare(!share);
  };
  const _toggleVisibilitySendPdf = e => {
    const { id } = e.target;
    if (sendPdf && id !== "sendPdf") {
      console.log(sendPdf, id)
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
          <div style={{ display: "flex" }}>
            <Button black={true} onClick={_mobileShare}>
              Share
            </Button>
            <Button style={{ marginRight: 0 }} onClick={_toggleVisibilitySendPdf}>Send PDF</Button>
          </div>
        </Header>
        <div id="printable">
          <BlockSegments>
            {segments.map((key, value) => {
              return key.length === 1 ? (
                <Segment>
                  <WithImage>
                    <Image src={key[0].img} />
                    <Title>{key[0].title}</Title>
                  </WithImage>
                </Segment>
              ) : (
                <SegmDiv>
                  {key.map((key0, ind) => {
                    return (
                      <Segment className="inDiv">
                        <WithImage>
                          <Image src={key0.img} />
                          <Title>{key0.title}</Title>
                        </WithImage>
                      </Segment>
                    );
                  })}
                </SegmDiv>
              );
            })}
          </BlockSegments>
          <BlockSegments>
            {segments1.map((key, i) => {
              return (
                <Segment
                  style={i === 0 ? { marginRight: "1%" } : {}}
                  className="long"
                >
                  <WithImage>
                    <Image src={key.img} />
                    <Title>{key.title}</Title>
                  </WithImage>
                </Segment>
              );
            })}
          </BlockSegments>
        </div>
      </Container>
      {share && (
        <Portal>
          <ShareComponent togglePopup={_toggleVisibilityShare} />
        </Portal>
      )}
      {sendPdf && (
        <Portal>
          <SendPdfComponent togglePopup={_toggleVisibilitySendPdf}/>
        </Portal>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
