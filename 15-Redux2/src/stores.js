import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./component/Slicer1";
import slice2Reducer from "./component/Slicer2";

const store = configureStore({
    reducer:{
        slice1: slice1Reducer,
        slice2: slice2Reducer 
    }
})
export default store;
// slice name : reducer name