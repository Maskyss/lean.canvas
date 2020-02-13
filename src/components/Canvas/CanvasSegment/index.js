import React from "react";
import { Segment, WithImage, Image, Title } from "./styles";
import { Droppable } from "react-beautiful-dnd";
import CanvasCard from "../CanvasCard/index";
import ErrorBoundary from "../ErrorBoundary/index";

import CanvasCardNoDragg from "../CanvasCard/withoutDragg";
import ScrollToBottom from "react-scroll-to-bottom";

const SegmentComponent = ({ item, style, className, listID, cards=[] }) => {
 
    return (
      <Droppable droppableId={String(listID)} type="card">
        {provided => (
          <Segment className={className} style={style}>
            <WithImage>
              <Image src={item.img} />
              <Title>{item.title}</Title>
            </WithImage>

            <ScrollToBottom className="droppable">
              <div     className="inDroppable"
                ref={provided.innerRef}
                 {...provided.droppableProps}
              >
                {cards.map((card, index) => {
                  return (
                    <CanvasCard
                      key={card.id}
                      index={index}
                      text={card.text}
                      id={card.id}
                      listID={listID}
                    />
                  );
                })}
                {provided.placeholder}
                <CanvasCardNoDragg text="+" listID={listID} />
              </div>
            </ScrollToBottom>
          </Segment>
        )}
      </Droppable>
    );
    
};

export default SegmentComponent;
