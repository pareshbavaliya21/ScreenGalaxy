import { createSlice} from "@reduxjs/toolkit";

const moviseNameSlice=createSlice({
  name:'MoviseName',
  initialState:'',
  reducers:{
    addInitialMovise:(state,action)=>{
     
      return action.payload;
    }
  }
});

export const moviseNameAction=moviseNameSlice.actions;

export default moviseNameSlice;