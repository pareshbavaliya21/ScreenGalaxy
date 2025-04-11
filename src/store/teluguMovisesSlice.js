import { createSlice} from "@reduxjs/toolkit";

const teluguMovisesSlice=createSlice({
  name:'teluguMovises',
  initialState:[],
  reducers:{
    addInitialMovise:(state,action)=>{
      
      return action.payload;
    }
  }
});

export const teluguMovisesAction=teluguMovisesSlice.actions;

export default teluguMovisesSlice;