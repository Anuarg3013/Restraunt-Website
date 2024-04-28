import { createSlice } from "@reduxjs/toolkit";

const loggedIn=createSlice({
    name:"Login",
    initialState:{
        isLogedIn:false,
       },
    reducers:{
        logedIn:(state,action)=>{
            state.isLogedIn=!state.isLogedIn;
        },
    }
}
)

export const{logedIn}=loggedIn.actions;

export default loggedIn.reducer;