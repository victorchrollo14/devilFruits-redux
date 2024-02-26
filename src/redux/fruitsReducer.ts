import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { devilFruits } from "../components/data";

export interface devilFruitType {
  id: string;
  name: string;
  englishName: string;
  type: string;
  abilities: string;
  users: string;
  description: string;
}

const initialState: devilFruitType[] = devilFruits;

export const devilFruitsSlice = createSlice({
  name: "devilFruits",
  initialState,
  reducers: {
    insertFruit: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    removeFruit: (state, action) => {
      const id = action.payload;
      console.log(id);
      return state.filter((devilFruit) => devilFruit.id !== id);
    },
    updateFruit: (
      state,
      action: PayloadAction<{ id: string; updatedFruit: devilFruitType }>,
    ) => {
      const { id, updatedFruit } = action.payload;
      state = state.map((devilFruit) => {
        if (devilFruit.id === id) {
          return updatedFruit;
        }
        return devilFruit;
      });

      return state;
    },
  },
});

export const { insertFruit, updateFruit, removeFruit } =
  devilFruitsSlice.actions;

export const selectDevilFruits = (state: RootState) => state.devilFruits;

export default devilFruitsSlice.reducer;
