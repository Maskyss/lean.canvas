import React from "react";

import { BlockSegments, SegmDiv } from "./styles";

import { connect } from "react-redux";
import { segments, segments1 } from "./utils";

import SegmentComponent from "./CanvasSegment";

const mapStateToProps = state => ({
  cardList: state.updateCardReducer.get("cardList")
});
const mapDispatchToProps = {};

const BlockSegmentsComponent = ({ cardList, provided }) => {
  return (
    <>
      <BlockSegments {...provided.droppableProps} ref={provided.innerRef}>
        {segments.map((key, i) => {
          return key.length === 1 ? (
            <SegmentComponent
              item={key[0]}
              listID={key[0].id}
              cards={cardList[key[0].id].cards}
            />
          ) : (
            <SegmDiv>
              {key.map((key0, ind) => {
                return (
                  <SegmentComponent
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockSegmentsComponent);
