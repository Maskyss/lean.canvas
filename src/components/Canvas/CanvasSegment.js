import React from "react";
import { Segment, WithImage, Image, Title } from "./styles";
import { Droppable } from "react-beautiful-dnd";
import CanvasCard from "./CanvasCard";
import CanvasActionButton from "./CanvasActionButton";

const SegmentComponent = ({ item, style, className, listID, cards }) => {
  return (
    <Droppable droppableId={String(listID)} type="card">
      {provided => (
        <Segment className={className} style={style} >
            <WithImage>
              <Image src={item.img} />
              <Title>{item.title}</Title>
            </WithImage>

            <div 
            // style={{height:'75%'}}
            {...provided.droppableProps} ref={provided.innerRef}>
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
              </div>
              <CanvasActionButton listID={listID} />
              {provided.placeholder}
    </Segment>
       
      )}
    </Droppable>
  );
};

export default SegmentComponent;
