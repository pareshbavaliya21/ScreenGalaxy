import { createSlice} from "@reduxjs/toolkit";

const kannadaMovisesSlice=createSlice({
  name:'kannadaMovises',
  initialState:[],
  reducers:{
    addInitialMovise:(state,action)=>{
     
      return action.payload;
    }
  }
});

export const kannadaMovisesAction=kannadaMovisesSlice.actions;

export default kannadaMovisesSlice;