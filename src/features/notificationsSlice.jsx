import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
    name:"notifications",
    initialState:{
        messages:[]
    },
    reducers:{
        addNotification:(state,action)=>{
            state.messages.push(action.payload)
        },
        clearNotification:(state)=>{
            state.messages=[];
        },
    }
})
export const {addNotification,clearNotification} =notificationsSlice.actions;
export default notificationsSlice.reducer