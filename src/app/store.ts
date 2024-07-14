import { configureStore } from "@reduxjs/toolkit";
import ganjinehReducer from "../features/ganjinehSlice";

export const store = configureStore({
    reducer: {
        ganjinehStreet: ganjinehReducer
    }
})

export type RootState = ReturnType<typeof store.getState>