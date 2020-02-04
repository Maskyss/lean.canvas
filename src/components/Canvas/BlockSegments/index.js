import React from "react";

import { BlockSegments, SegmDiv } from "./styles";

import { connect } from "react-redux";
import { segments, segments1 } from "../utils";

import SegmentComponent from "../CanvasSegment/index";

const mapStateToProps = state => ({
  cardList: state.updateCardReducer.get("cardList")
});
const mapDispatchToProps = {};

const BlockSegmentsComponent = ({ cardList }) => {
  try {
    return (
      <>
        <BlockSegments>
          {segments.map((key, i) => {
            return key.length === 1 ? (
              key.map((key0, ind) => {
                return (
                  <SegmentComponent
                    key={ind}
                    item={key0}
                    listID={key0.id}
                    cards={cardList[key0.id].cards}
                  />
                );
              })
            ) : (
              <SegmDiv key={i}>
                {key.map((key0, ind) => {
                  return (
                    <SegmentComponent
                      key={ind}
                      item={key0}
                      className="inDiv"
                      listID={key0.id}
                      cards={cardList[key0.id].cards}
                    />
                  );
                })}
              </SegmDiv>
            );
          })}
        </BlockSegments>
        <BlockSegments>
          {segments1.map((key, i) => {
            return (
              <SegmentComponent
                key={i}
                item={key}
                style={i === 0 ? { marginRight: "1%" } : {}}
                className="long"
                listID={key.id}
                cards={cardList[key.id].cards}
              />
            );
          })}
        </BlockSegments>
      </>
    );
  } catch (error) {
    return <div></div>;
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockSegmentsComponent);
