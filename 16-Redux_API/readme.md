>Crypto currecncy detail api: api.coingecko.com/api/v3/coins/markets?vs_currecy=usd&order=market_cap_desc&per_pge=20


## <span style="color: #f34b7d;">Redux API Integration</span>

We will make 3 states in our Redux store to manage the API data:
1. `loading`: A boolean to indicate if the API request is in progress.
2. `data`: An array to store the fetched data from the API.
3. `error`: A string to store any error message if the API request fails.

When we fatch the data from the API, we will update these states accordingly:
- Set `loading` to `true` when the request starts.
- On successful data fetch, set `loading` to `false`, update `data` with the fetched data, and clear any previous `error`.
- On failure, set `loading` to `false`, clear `data`, and update `error` with the error message.

### <Span style="color: orange;">createAsyncThunk</span>

Insted of fetching data directly in the components, we will fetch data globally and createAsyncThunk from Redux Toolkit will help us to manage the asynchronous logic.

it also helps to dispatch it will handle `dispatch(loading)`, `dispatch(success)`, `dispatch(error)` automatically.

we just have to fetch the data.

```javascript
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const FetchData = createAsyncThunk(
    //Action: type : payload
    'Coin/fetch',
    async (args, thunkAPI)=>{
        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currecy=usd&order=market_cap_desc&per_page=${args}`)
            const data = await response.json();
            return data; //this will be the payload
        }
        catch(err){
            return rejectedWithValue(err.message);
        }
    }
)

const slicer1 = createSlice({
    name: 'slice1',
    initialState: {data: [], loading: false, error: null},
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(FetchData.pending , (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(FetchData.fulfilled, (state, action)=>{
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
```

It call create three action types:
- `Coin/fetch/pending`
- `Coin/fetch/fulfilled`
- `Coin/fetch/rejected`

first `Coin/fetch` is the action type we provided.
second `pending`, `fulfilled`, `rejected` are created by createAsyncThunk automatically to handle different states of the async request.

when we call `dispatch(FetchData(20))`, it will first dispatch the `Coin/fetch/pending` action, then if the request is successful, it will dispatch the `Coin/fetch/fulfilled` action with the fetched data as the payload. If the request fails, it will dispatch the `Coin/fetch/rejected` action with the error message as the payload.

thunkAPI: it provides several useful methods, like getState, dispatch, rejectWithValue etc. It is calling the dispatch function internally.

### <Span style="color: orange;">What is extraReducers?</span>
extraReducers is a field in createSlice that allows us to handle actions that are not defined in the reducers field. This is useful when we want to handle actions created outside of the slice, such as those created by createAsyncThunk.

here, we are using extraReducers to handle the actions created by the FetchData thunk.

builder is a callback function that provides a fluent API to define case reducers for the actions.

we add three cases to handle the pending, fulfilled, and rejected actions of the FetchData thunk.

### <span style="color: #f34b7d;">How to use it ?</span>

In the component, we will use useDispatch to dispatch the FetchData thunk and useSelector to access the state from the Redux store.

```javascript
import { useDispatch, useSelector } from "react-redux"
import { FetchData } from "./Slicer1"
import CoinCard from "./CoinCard";
import { useEffect } from "react";


export default function Coine(){

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state)=>state.slice1);

    useEffect(()=>{
        dispatch(FetchData(10));
    }, [dispatch])   

    if(loading){
        return <h1>Data is loading</h1>
    }
    if(error){
        return <h1>Error has ocurred: {error}</h1>
    }

    return(
        <>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {data.map((value)=><CoinCard key={value.id} coin={value}/>)}
            </div>
        </>
    )

}
```
Here, we dispatch the FetchData thunk inside useEffect to fetch the data when the component mounts.

>and remember that FetchData(10) is a function not action.

### <span style="color: orange;">If FetchData is function how does store now whom to call?</span>

When we dispatch FetchData(10), it goes to store, it has a middleware called thunk middleware, which checks if the dispatched action is a function. If it is, it calls that function.

Now FetchData(10) is called first it will call a dispatch with `{type: 'Coin/fetch/pending', payload: undefined}`. it go to store store see that there is no slice name mention so it pass it to all the slices. slicer1 see that it has extraReducers to handle 'Coin/fetch/pending' so it call that case reducer and update the state.

then FetchData(10) continue its execution and fetch the data from the API. once it get the data it will call dispatch again with `{type: 'Coin/fetch/fulfilled', payload: data}`. again store pass it to all the slices. slicer1 see that it has extraReducers to handle 'Coin/fetch/fulfilled' so it call that case reducer and update the state with the fetched data.

If it fails to fetch the data it will call dispatch with `{type: 'Coin/fetch/rejected', payload: error.message}`. again store pass it to all the slices. slicer1 see that it has extraReducers to handle 'Coin/fetch/rejected' so it call that case reducer and update the state with the error message.

### <span style="color: oraneg;">Why we didn't mention slice name before FetchData ?</span>

We didnt mention slice name before FetchData so it goes to all the slices in the store. if we had mentioned slice name it would have gone to that specific slice only and saved us some time. 

Because sometime we want to fetched data in multiple slices. so we dont mention slice name.