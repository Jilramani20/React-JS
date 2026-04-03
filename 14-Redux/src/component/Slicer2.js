import { createSlice } from "@reduxjs/toolkit";

const reactSlicer = createSlice({
    name: "slice2",
    initialState: {
        count:0
    },
    reducers: {
        Increment: (state) => {
            state.count += 5;
        },
        Decrement: (state) => {
            state.count -= 5;
        },
        Reset: (state) => {
            state.count = 0;
        }
    }
})

export default reactSlicer.reducer;