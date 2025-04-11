import { createSlice} from "@reduxjs/toolkit";

const bollywoodMoviseSlice=createSlice({
  name:'bollywoodMovises',
  initialState:[],
  reducers:{
    addInitialMovise:(state,action)=>{
     
      return action.payload;
    }
  }
});

export const bollywoodMoviseAction=bollywoodMoviseSlice.actions;

export default bollywoodMoviseSlice;