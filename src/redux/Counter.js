import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            console.log("increment")
           state.count+=1;
        },
        decrement: (state) => {

            console.log("decrement")
            if(state.count>0)
            state.count-=1;
         },
    }
});
export const { increment,decrement } = counterSlice.actions;

export default counterSlice.reducer;
