import { createSlice} from "@reduxjs/toolkit";

const hollywoodMoviseSlice=createSlice({
  name:'hollywoodMovises',
  initialState:[],
  reducers:{
    addInitialMovise:(state,action)=>{
    
      return action.payload;
    }
  }
});

export const hollywoodMoviseAction=hollywoodMoviseSlice.actions;

export default hollywoodMoviseSlice;