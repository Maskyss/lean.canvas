import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { actionsCard } from "../../bus/card/actions";
import styled from "styled-components";
import KanbanList from "./KanbanList";

const mapStateToProps = state => ({
  cardList: state.updateCardReducer.get("cardList")
});
const mapDispatchToProps = {
  dragHappaned: actionsCard.dragHappaned,
  getList: actionsCard.getList

};

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  marginright: 8;
`;
const Kanban = ({ dragHappaned, cardList,getList }) => {
  useEffect(()=>{
    getList()
},[])
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {provided => (
          <ListsContainer {...provided.droppableProps} ref={provided.innerRef}>
            {cardList.map((list, index) => (
              <KanbanList
                listID={list.id}
                title={list.title}
                key={list.id}
                cards={list.cards}
                index={index}
              />
            ))}
            {provided.placeholder}
          </ListsContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kanban);
