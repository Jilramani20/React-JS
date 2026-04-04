import {createSlice} from "@reduxjs/toolkit";

const sliceSwiggy = createSlice({
    name: "swiggySlice",
    initialState: {
        count:0
    },
    reducers: {
        addToCart: (state, action) => {
            state.count = state.count + 1;
        },
        removeFromCart: (state, action) => {
            state.count = state.count - 1;
        }

    }
})

export const {addToCart, removeFromCart} = sliceSwiggy.actions;
export default sliceSwiggy.reducer;