import { createSlice} from "@reduxjs/toolkit";

const CastSlice=createSlice({
  name:'cast',
  initialState:[],
  reducers:{
    addInitialMovise:(state,action)=>{
     
      return action.payload;
    }
  }
});

export const CastAction=CastSlice.actions;

export default CastSlice;