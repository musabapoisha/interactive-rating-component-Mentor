import { configureStore } from "@reduxjs/toolkit";
import ratingSlice from "./ratingSlice";

export const store = configureStore({
  reducer: {
    rating: ratingSlice,
  },
});
