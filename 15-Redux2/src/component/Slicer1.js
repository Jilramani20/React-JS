import { createSlice } from "@reduxjs/toolkit";

const reactSlicer = createSlice({
    name: "slice1",
    initialState: {
        count:0
    },
    reducers: {
        Increment: (state) => {
            state.count += 1;
        },
        Decrement: (state) => {
            state.count -= 1;
        },
        Reset: (state) => {
            state.count = 0;
        },
        CustomIncreaser : (state,action) =>{
            state.count += action.payload;
        }
        //* action is payload (arguments) that we send from component to reducer
    }
})

export const { Increment, Decrement, Reset , CustomIncreaser} = reactSlicer.actions;
export default reactSlicer.reducer; 