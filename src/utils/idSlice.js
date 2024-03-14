import { createSlice } from "@reduxjs/toolkit"

const idSlice = createSlice({
    name:"userId",
    initialState:null,
    reducers:{
        addId:(state, action)=>{
            return action.payload;
        }
    },
});

export const  {addId} = idSlice.actions;
export default idSlice.reducer;