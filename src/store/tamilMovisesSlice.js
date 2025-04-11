import { createSlice} from "@reduxjs/toolkit";

const tamilMovisesSlice=createSlice({
  name:'tamilMovises',
  initialState:[],
  reducers:{
    addInitialMovise:(state,action)=>{
     
      return action.payload;
    }
  }
});

export const tamilMovisesAction=tamilMovisesSlice.actions;

export default tamilMovisesSlice;