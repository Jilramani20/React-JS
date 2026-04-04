import { configureStore } from "@reduxjs/toolkit";
import sliceSwiggy from "./sliceSwiggy";
const srores = configureStore({
    reducer: {
        swiggySlice:  sliceSwiggy
    }
})
export default srores;