import { configureStore } from "@reduxjs/toolkit";
import devilFruitsReducer from "./fruitsReducer";

const store = configureStore({
  reducer: {
    devilFruits: devilFruitsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
