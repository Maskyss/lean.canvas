import { put, apply } from "redux-saga/effects";
import { actionsCard } from "../../actions";
import uuid from "uuid";

export function* addCard({ payload }) {
  try {
    const [{ text, listID }, ...state] = payload;
    const newCard = {
      text: text,
      id: uuid.v4()
    };

    const newState = state.map(list => {
      if (list.id === listID) {
        return {
          ...list,
          cards: [...list.cards, newCard]
        };
      } else {
        return list;
      }
    });

    yield put(actionsCard.setList(newState));
      localStorage.setItem('cardList', JSON.stringify(newState))

  } catch (err) {
    console.log(err)
  }
}

export function* deleteCard({ payload }) {
  try {
    const [{ id, listID }, ...state] = payload;

    const newState = state.map(list => {
      if (list.id === listID) {
        const newCards = list.cards.filter(card => card.id !== id);
        return { ...list, cards: newCards };
      } else {
        return list;
      }
    });

    yield put(actionsCard.setList(newState));
      localStorage.setItem('cardList', JSON.stringify(newState))

  } catch (err) {
    console.log(err)
  }
}

export function* editCard({ payload }) {
	try {
	  const [{ id, listID,cardText }, ...state] = payload;
  
	  const newState = state.map(list => {
        if (list.id === listID) {
          const newCards = list.cards.map(card => {
            if (card.id === id) {
              card.text = cardText;
              return card;
            }
            return card;
          });
          return { ...list, cards: newCards };
        }
        return list;
      });
  
    yield put(actionsCard.setList(newState));
      localStorage.setItem('cardList', JSON.stringify(newState))
    
	} catch (err) {
    console.log(err)
  }
  }

  export function* dragCard({ payload }) {
    try {
      const [{  droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type}, ...state] = payload;

        const newState = state;

        if (type === "list") {
          const list = newState.splice(droppableIndexStart, 1);
          newState.splice(droppableIndexEnd, 0, ...list);
          return newState;
        }
        if (droppableIdStart === droppableIdEnd) {
          const list = state.find(list => droppableIdStart === list.id);
          const card = list.cards.splice(droppableIndexStart, 1);
          list.cards.splice(droppableIndexEnd, 0, ...card);
        }
  
        if (droppableIdStart !== droppableIdEnd) {
          const listStart = state.find(list => droppableIdStart === list.id);
          const card = listStart.cards.splice(droppableIndexStart, 1);
          const listEnd = state.find(list => droppableIdEnd === list.id);
          listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        }
      yield put(actionsCard.setList(newState));
      localStorage.setItem('cardList', JSON.stringify(newState))

    } catch (err) {
      console.log(err)
    }
    }