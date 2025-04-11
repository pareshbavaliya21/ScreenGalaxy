import { createSlice} from "@reduxjs/toolkit";

const malayalamMoviseSlice=createSlice({
  name:'malayalamMovises',
  initialState:[],
  reducers:{
    addInitialMovise:(state,action)=>{
      
      return action.payload;
    }
  }
});

export const malayalamMoviseAction=malayalamMoviseSlice.actions;

export default malayalamMoviseSlice;