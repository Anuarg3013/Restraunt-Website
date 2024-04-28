import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],//initially koyn bhi item nhi hai
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            const newState = {
                ...state,
                items: state.items.filter((item) =>
            
                (item?.id !== action.payload.id))
              };
              return newState;
        },
        
        clearCart:(state)=>{
            state.items=[];
        },
    }
}
)

export const{addItem, removeItem, clearCart}=cartSlice.actions;

export default cartSlice.reducer;// saare reducer ko ek reducer mh daal kar bhejta hai