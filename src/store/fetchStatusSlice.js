import { createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice=createSlice({
  name:'fatchstatus',
  initialState:{
    fetchDone:false, //false:"pending" and true:"done"
    currentlyFetching:false,
  },
  reducers:{
    markFetchDone: (state)=>{
       state.fetchDone=true;
    },
    markFetchingStart: (state)=>{
       state.currentlyFetching=true;
    },
    markFetchingFinished: (state)=>{
       state.currentlyFetching=false;
    },
  }
});

export const fetchStatusAction=fetchStatusSlice.actions;

export default fetchStatusSlice;