// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const cardId = action.payload.id;
      const index = state.favorites.findIndex(
        (favorite) => favorite.id === cardId
      );
      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addCard, removeCard, toggleFavorite } = cardSlice.actions;

const reducer = cardSlice.reducer;

const store = configureStore({
  reducer: { cards: reducer },
});

export default store;
