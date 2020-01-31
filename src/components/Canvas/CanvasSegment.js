import React from "react";
import { Segment, WithImage, Image, Title } from "./styles";
import { Droppable } from "react-beautiful-dnd";
import CanvasCard from "./CanvasCard";

const SegmentComponent = ({ item, style, className, listID, cards }) => {
  return (
    <Droppable droppableId={String(listID)} type="card">
      {provided => (
        <Segment className={className} style={style}>
          <WithImage>
            <Image src={item.img} />
            <Title>{item.title}</Title>
          </WithImage>

          <div
            className='droppable'
            {...provided.droppableProps}
            ref={provided.innerRef}
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
          </div>
        </Segment>
      )}
    </Droppable>
  );
};

export default SegmentComponent;
