import React from "react";
import KanbanCard from "./KanbanCard";
import KanbanActionButton from "./KanbanActionButton";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";


const ListContainer = styled.div`
  background-color: grey;
  background: linear-gradient(
    45deg,
    rgba(145, 232, 79, 1) 0%,
    rgba(0, 128, 128, 1) 100%
  );
  border-radius: 3px;
  width: 300px;
  padding: 15px 8px 25px 8px;
  height: 100%;
  margin: 0 10px 0 1px;
`;



const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;



const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  font-size: 18px;
  font-weight: bold;
  margin: 1px 5px 20px 5px;
  &:hover {
    background: #ccc;
    padding: 0.5%;
  }
`;


const KanbanList = ({ title, cards, listID, index }) => {

  

  return (
    <ListContainer>
      <Droppable droppableId={String(listID)} type="card">
        {provided => (
          <div>
              
                <TitleContainer>
                  <ListTitle >
                    {title}
                  </ListTitle>
                </TitleContainer>
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map((card, index) => {
                return (
                  <KanbanCard
                    key={card.id}
                    index={index}
                    text={card.text}
                    id={card.id}
                    listID={listID}
                  />
                );
              })}
              <KanbanActionButton listID={listID} />
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </ListContainer>
  );
};
export default KanbanList;
