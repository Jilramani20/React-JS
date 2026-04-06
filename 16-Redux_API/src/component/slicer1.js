import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// createAsyncThunk
// {type : 'Coin/fetch/pending', payload : undefined} => action object
// {type : 'Coin/fetch/fullfilled', payload : data}
// {type : 'Coin/fetch/rejected', payload : error.message}
//* This will automatically dispatch three actions by asyncThunk : pending, fullfilled, rejected
//* thunkAPI => dispatch handling automatically by createAsyncThunk

const FetchData = createAsyncThunk(
    // Action : type : payload
    'Coin/fetch', //* action name
    async (args , thunkAPI) => {
        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = await response.json();
            return data; //* this data will be the payload of the action
        }
        catch(error){
            return rejectedWithValue(error.message);
        }
    }
    
)

const slicer1 = createSlice({
    name: 'slice1',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},

    extraReducers: (builder)=>{
        builder
        .addCase(FetchData.pending , (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(FetchData.fulfilled , (state, action)=>{
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(FetchData.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export default slicer1.reducer;
export {FetchData};