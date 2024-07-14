import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ganjinehState {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  isSignedIn: boolean,
}

const initialState: ganjinehState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  isSignedIn: false,
};

const ganjinehSlice = createSlice({
  name: "ganjineh",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setIsSignedIn: (state, action: PayloadAction<boolean>) => {
      state.isSignedIn = action.payload;
    },
  }
})

export const {
  setFirstName,
  setLastName,
  setPhoneNumber,
  setIsSignedIn
} = ganjinehSlice.actions;

export default ganjinehSlice.reducer;