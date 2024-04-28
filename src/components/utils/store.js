import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loggedIn from "./logedin";

const store=configureStore({
    reducer:{
        cart:cartSlice,
        Login:loggedIn
    },
});

export default store;
