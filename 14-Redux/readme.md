## <span style="color:red">Redux</span>

### <span style="color:orange">What is problem?</span>

when you have to share state between multiple components, it can get messy and hard to manage.

also when you have to share state to other components at the same level you have to do state lifting and if you have to share state to the child component of the child component you have to do prop drilling which is also messy. you have to use context api (useContex - Hook) to avoid prop drilling but still it can get messy when the application grows larger.

Redux helps to solve these problems by providing a centralized store for the state of your application.

### <span style="color:orange">What is Redux?</span>

It is just a global store that holds the state of your application.

It says that you just make the state global so every component can access the state from the global store instead of passing the state via props.

### <span style="color:orange">Now the question is does the manipulation of the state happen in the component itself?</span>

No it does not happen in the component itself. Instead, you have to define actions and reducers to manipulate the state.

We make the state kind of private like in OOP and we provide public methods (actions) to manipulate the state. Here also we follow the same principle of OOP. we make the state private in the store and we provide public methods (actions) to manipulate the state.

#### why we do this?

- components should not have direct access to the state they may do unwanted manipulation of the state.
- components may use different approach to manipulate the state. (some use optamized way some use unoptamized way)
- to have a single source of truth for the state of the application.
- to have a predictable way of manipulating the state.

### <span style="color:orange">Reducer?</span>

so the function that manipulates the state is called **reducer** and the object that describes what to do with the state is called action.

### <span style="color:orange">Dispatch?</span>

To call the function that manipulates the state (reducer) we use a method called **dispatch**. we dispatch an action to the reducer to manipulate the state.

like this:

```js
dispatch(Increment())
```

### <span style="color:orange">Slice?</span>

Let's say multiple people are working on the same application. so what if two people use same name for different state variables? or what if two people use same name for different actions?

to avoid this problem we use **slice**. slice is just a way to group related state variables and actions together.

or you just divide the store into multiple slices. each slice has its own state variables and actions.

keep in mind that slice name should be unique.

now we will add slice name with the dispatched action to avoid name collision.
like this:

```js
dispatch(counter/Increment())
```

### <span style="color:orange">How to use Redux?</span>

first have to install the required packages:

```bash
npm install @reduxjs/toolkit 
npm install react-redux
```

tootlkit is used to create store and slices.

If you want to use Hooks like useSelector and useDispatch you have to install react-redux.

> How to create slices

```js
import createSlice from "@reduxjs/toolkit"

const reactSlicer =  createSlice({
    name: "slice1", // unique name for the slice
    initialState: {count: 0}, // initial state of the slice
    reducers: { 
        Increment: (state)=>{state.count = state.count+1},
        Decrement: (state)=>{state.count = state.count-1},
        Reset: (state)=>{state.count = 0}
    }
})

export const {Increment, Decrement, Reset} = reactSlicer.actions; // exporting the actions to use in the component
export default reactSlicer.reducer;
```

> how to create store

In store we have to match the slices with their reducers.

```js
import { configureStore } from "@reduxjs/toolkit";
import Slicer1Reducer from "./components/Slicer1";

const stors = configureStore({
    reducer: {
        slice1: Slicer1Reducer // slice name : reducer
    }
});

export default stors;
```

>how to read state from the store

```js
import { useSelector } from "react-redux";

const count = useSelector((state)=>state.slice1.count)
```

useSelector gives global state of the store. then we have to access the slice and then the state variable.

this is how the global state looks like:

```js
{
    slice1: {
        count: 0
    },
    slice2: {
        name: "Het"
    }
}
```

>how to dispatch action to the reducer

```js
import { useDispatch } from "react-redux";
const dispatch = useDispatch();
dispatch(Increment())
```

> How does the store know which reducer to call?

Increment function is not normal function it has extra information about the slice name. so when we dispatch the action it looks for the slice name and then calls the corresponding reducer.

This extra information is added by the reactSlicer.actions when we export the actions.

>how to provide store to the application

```js
import { Provider } from "react-redux";
import Stores from "./Stores"
function App(){

    return (<>
        <Provider store={Stores}>
            <Counting />
        </Provider>
    </>)
} 
//now components inside the Provider can access the store
```