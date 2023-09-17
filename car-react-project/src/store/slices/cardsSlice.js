// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  favorites: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      const cardId = action.payload;
      const index = state.favorites.indexOf(cardId);
      if (index === -1) {
        state.favorites.push(cardId);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const { addCard, removeCard, toggleFavorite } = cardSlice.actions;

const reducer = cardSlice.reducer;

const store = configureStore({
  reducer: { cards: reducer },
});

export default store;
