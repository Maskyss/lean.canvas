import { put } from "redux-saga/effects";
import { actionsCard } from "../../actions";

export function* dragCard({ payload }) {
    try {
      const [
        {
          droppableIdStart,
          droppableIdEnd,
          droppableIndexEnd,
          droppableIndexStart
        },
        ...state
      ] = payload;
  
    

      if (droppableIdStart === droppableIdEnd) {
        const list = state[0][droppableIdStart];
        const card = list.splice(droppableIndexStart, 1);
        list.splice(droppableIndexEnd, 0, ...card);
      }
  
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state[0][droppableIdStart]
        const card = listStart.splice(droppableIndexStart, 1);
        const listEnd = state[0][droppableIdEnd]
        listEnd.splice(droppableIndexEnd, 0, ...card);
      }
      yield put(actionsCard.setList(state[0]));

    } catch (err) {
      console.log(err, 'erererererere');
    }
  }