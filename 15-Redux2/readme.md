### <span style="color:orange">How does the store know which reducer belongs to which slice ?</span>

Dispacthing an action to the store will look like this:

```js
dispatch(Increment())
```
If we do `conslole.log(Increment())` it will return an object like this:

```js
{type: 'slice1/Increment', payload: undefined}
```
whenever we run dispatch it sends an object to the store with two properties `type` and `payload`. like in the above example.

The type property contains the slice name and the action name separated by a `/`. So the store can easily identify which reducer belongs to which slice.

now store can easily identify which reducer to call when an action is dispatched. so it runs that reducer and updates the state accordingly.

### <span style="color:orange">Why do we export actions from the slice Inseted of directly exporting the reducers ?</span>

also this is way we dont just export the reducer functions directly. because if we do that we will lose the slice name in the action type.

We have to export the actions from the slice itself so that the action type contains the slice name.
like this:

```js
export const {Increment, Decrement, Reset} = reactSlicer.actions; // exporting the actions to use in the component
export default reactSlicer.reducer;
```

Now when we dispatch an action it will look like this:

```js
dispatch(slice1/Increment())
```
This way we can avoid name collision between different slices. 

> Inshort actions are used to tell the store which reducer to call.

### <span style="color:orange">When update the state how does it render the component again ?</span>

We know from the useState hook that when we update the state the component re-renders again.

But when we update the array or object directly react does not detect the change and does not re-render the component. we have to change its reference to make react detect the change.

It is done using the **`Immer`** library internally in Redux toolkit.

It allows us to directly manipulate the object or array in the reducer. but under the hood it creates a new copy of the state with the updated values and changes the reference.

before the Immer library we had to manually create a new copy of the state using spread operator or Object.assign() method.

like this:

```js
// using spread operator
Increment: (state)=>{
    return {...state, count: state.count + 1}
}
// using Object.assign() method
Increment: (state)=>{
    return Object.assign({}, state, {count: state.count + 1})
}
```
Here we use spread operator and Object.assign() method to create a new copy of the state with the updated count value. also when it sees that {count: 0, count: 1} it removes the old object from memory.

and we use spread operator because there might be other properties in the state object that we dont want to lose.

But with Immer library we can directly manipulate the state object like this:

```js
Increment: (state)=>{
    state.count = state.count + 1
}
```
Here we directly manipulate the state object. but under the hood Immer library creates a new copy of the state with the updated count value and changes the reference. so react detects the change and re-renders the component.

### <span style="color:orange">How does Immer handle this?</span>

Immer sendds us a new Draft state which is a proxy of the original state. so whenever we make any changes to the draft state it tracks those changes and creates a new copy of the original state with those changes.

When we return from the reducer function Immer checks if there are any changes made to the draft state. if there are changes it creates a new copy of the original state with those changes and returns it. if there are no changes it returns the original state.  

that is why we dont return anything from the reducer function when using Immer. because when we return none object it will be confused with returning a new state object.

### <span style="color:orange">Payload ?</span>

payload is nothing but the argument that we pass with dispatch function.
like this:

```js
function handleClick(){
    dispatch(CustomIncrement(Number(number)));
}
<button onClick={handleClick}>Custom Increment</button>
```

Store will receive an object like this when we dispatch the action:

```js
{type: 'slice1/CustomIncrement', payload: 5}
```

how will the reducer know what value to increment by?
we can access the payload property from the action object in the reducer function.
like this:
```js
CustomIncrement: (state, action) => {
    state.count += action.payload
}
```
> If we want to pass multiple values we can pass an object as payload.