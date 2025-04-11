import { createSlice} from "@reduxjs/toolkit";

const moviseSlice=createSlice({
  name:'Movises',
  initialState:[],
  reducers:{
    addInitialMovise:(state,action)=>{
   
      return action.payload;
    }
  }
});

export const moviseAction=moviseSlice.actions;

export default moviseSlice;