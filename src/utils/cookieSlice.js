import { createSlice } from "@reduxjs/toolkit"

const idSlice = createSlice({
    name:"cookie",
    initialState:null,
    reducers:{
        addCookie:(state, action)=>{
            return action.payload;
        }
    },
});

export const  {addCookie} = idSlice.actions;
export default idSlice.reducer;