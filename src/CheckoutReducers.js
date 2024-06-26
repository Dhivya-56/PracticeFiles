import { createSlice } from "@reduxjs/toolkit";
let initialState=[];

export const CheckoutSlice=createSlice({
    name:'checkout',
    initialState,
  
    reducers:{
      
      check:(state,action)=>{
        return action.payload;
      },
      check_Update:(state,action)=>{
        return action.payload;
      }
     
    }
  
})

export const { check,check_Update } = CheckoutSlice.actions;
export default CheckoutSlice.reducer;