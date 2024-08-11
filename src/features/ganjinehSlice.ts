import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ganjinehState {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  isSignedIn: boolean,
  activeGames: any[],
  singleGame: {
    [key: string]: any
  },
  singleLevel: {
    [key: string]: any
  },
  loading: { activeGames: boolean, singleGame: boolean, levels: boolean, singleLevel: boolean },
}

const initialState: ganjinehState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  isSignedIn: false,
  activeGames: [],
  singleGame: {},
  singleLevel: {},
  loading: { activeGames: true, singleGame: true, levels: true, singleLevel: true },
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
    setActiveGames: (state, action: PayloadAction<[]>) => {
      state.activeGames = action.payload;
    },
    setSingleGame: (state, action: PayloadAction<{}>) => {
      state.singleGame = action.payload;
    },
    setSingleLevel: (state, action: PayloadAction<{}>) => {
      state.singleLevel = action.payload;
    },
    setActiveGamesLoading: (state, action: PayloadAction<boolean>) => {
      state.loading.activeGames = action.payload;
    },
    setSingleGameLoading: (state, action: PayloadAction<boolean>) => {
      state.loading.singleGame = action.payload;
    },
    setLevelsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading.levels = action.payload;
    },
    setSingleLevelLoading: (state, action: PayloadAction<boolean>) => {
      state.loading.singleLevel = action.payload;
    },
  }
})

export const {
  setFirstName,
  setLastName,
  setPhoneNumber,
  setIsSignedIn,
  setActiveGames,
  setSingleGame,
  setSingleLevel,
  setActiveGamesLoading,
  setSingleGameLoading,
  setLevelsLoading,
  setSingleLevelLoading
} = ganjinehSlice.actions;

export default ganjinehSlice.reducer;