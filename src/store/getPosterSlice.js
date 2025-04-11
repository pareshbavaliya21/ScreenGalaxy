import { createSlice} from "@reduxjs/toolkit";

const getPosterSlice=createSlice({
  name:'poster',
  initialState:[],
  reducers:{
    addInitialMovise:(state,action)=>{
    
      return action.payload;
    }
  }
});

export const getPosterAction=getPosterSlice.actions;

export default getPosterSlice;