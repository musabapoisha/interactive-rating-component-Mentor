import { createSlice } from "@reduxjs/toolkit";

export const ratingSlice = createSlice({
  name: "counter",
  initialState: {
    raiting: 0,
  },
  reducers: {
    addRating: (state, action) => {
      state.raiting = action.payload.raiting;
    },
  },
});

export const { addRating } = ratingSlice.actions;

export default ratingSlice.reducer;
