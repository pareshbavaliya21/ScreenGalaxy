import {configureStore} from "@reduxjs/toolkit";
import bollywoodMoviseSlice from "./bollywoodMoviseSlice";
import CastSlice from "./CastSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import getPosterSlice from "./getPosterSlice";
import hollywoodMoviseSlice from "./hollywoodMoviseSlice";
import kannadaMovisesSlice from "./kannadaMovisesSlice";
import malayalamMoviseSlice from "./malayalamMoviseSlice";
import moviseNameSlice from "./moviseNameSlice";
import moviseSlice from "./moviseSlice";
import tamilMovisesSlice from "./tamilMovisesSlice";
import teluguMovisesSlice from "./teluguMovisesSlice";

const moviseStore = configureStore({
  reducer:{
    teluguMovises:teluguMovisesSlice.reducer,
    tamilMovises:tamilMovisesSlice.reducer,
    bollywoodMovises:bollywoodMoviseSlice.reducer,
    hollywoodMovises:hollywoodMoviseSlice.reducer,
    kannadaMovises:kannadaMovisesSlice.reducer,
    malayalamMovises:malayalamMoviseSlice.reducer,
    fatchstatus:fetchStatusSlice.reducer,
    cast:CastSlice.reducer,
    MoviseName:moviseNameSlice.reducer,
    Movises:moviseSlice.reducer,
    poster:getPosterSlice.reducer,
  }
});

export default moviseStore;