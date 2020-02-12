import React from "react";

import { BlockSegments, SegmDiv } from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { segments, segments1 } from "../utils";

import SegmentComponent from "../CanvasSegment/index";



const BlockSegmentsComponent = () => {
  const cardList = useSelector(state =>
    state.updateCardReducer.get("cardList")
  );

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
                    cards={cardList[key0.id]}
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
                      cards={cardList[key0.id]}
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
                style={i === 0 ? { marginRight: "1rem" } : {}}
                className="long"
                listID={key.id}
                cards={cardList[key.id]}
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

export default BlockSegmentsComponent;
