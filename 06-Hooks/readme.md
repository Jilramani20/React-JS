## <span style="color:blue;">Hooks</span>

Hooks are nothing but a function which we use to manipulate the dom or to add some functionality in our react components. There are many hooks which are used in react but the most commonly used hooks are:
1. useState
2. useEffect
3. useContext
4. useReducer
5. useRef
6. useMemo
7. useCallback
8. useImperativeHandle
9. useLayoutEffect
10. useDebugValue

## <span style="color:blue;"> useState - Hook</span>
Lets first understand what is state in react. state means anything which can change in our application. For example, in a counter application, the count value is a state because it can change when we click on the increment or decrement button.

you can import useState hook from react like this: it's in react package
```javascript  
import React, { useState } from 'react';
```

### <span style="color:orange;"> How to use useState</span>

whenever you initialize a state using useState hook, it returns an array of two values. The first value is the current state value and the second value is a function which is used to update the state value.

```javascript
let [count, setCount] = useState(0); //count will be initialized with 0
```

now when you want to update the state value, you can call the setState function and pass the new value as an argument to update the UI.

```javascript
count++;
setCount(count); //this will update the UI with the new count value
```
### <span style="color:orange;"> How it works ?</span>

```javascript
function Counter() {
    let [count, setCount] = useState(0);

    function incrementNumber() {
        count++;
        setCount(count);
    }

    function decrementNumber() {
        count--;
        setCount(count);
    }

    return (
        <div className="first">
            <h1>Count is : {count}</h1>
            <button onClick={incrementNumber} >Increment {count}</button>
            <button onClick={decrementNumber} >Decrement {count} </button>
        </div>
    )
}
```
When you click on the increment button, the incrementNumber or decrementNumber function is called respectively.

and inside these functions, the count value is updated and then the setCount function is called with the new count value.

when it see the setCount function it re-render the Counter and call the Counter function again ans it will run the line `let [count, setCount] = useState(0);` again. but this time it will not initialize the count with 0, instead it will run `let [count, setCount] = useState(1);` and run the rest of the code and this way the count value will be updated in the UI.

### <span style="color:orange;"> Note to keep in mind</span>

useState hook expects the new value to be passed to the setState function. if you pass the same value as the current state value, it will not re-render the component. For example, if the current count value is 5 and you call setCount(5), it will not re-render the component because the count value is already 5.

so if you are using an array or object as a state, make sure to create a new array or object when updating the state. because if you modify the existing array or object and pass it to the setState function, it will not re-render the component. For example,
```javascript
let [arr, setArr] = useState([1, 2, 3]);
arr.push(4);
setArr(arr); //this will not re-render the component
```
to fix this issue, you can create a new array or object using the spread operator and pass it to the setState function. For example,
```javascript
let [arr, setArr] = useState([1, 2, 3]);
arr.push(4);
setArr([...arr]); //this will re-render the component
```

but for prmitive values like number, string, boolean etc.
if you pass the same value as the current state value, it will re-render the component for the first time but for subsequent times it will not re-render the component it bailot.

````javascript
let [count, setCount] = useState(5);
setCount(5); //this will re-render the component for the first time
setCount(5); //this will not re-render the component for subsequent times
````

### <span style="color:orange;"> useState returned funcion also take a callback function</span>

```javascript
const [time, setTime] = useState(0);

function start(){

    setInterval(() => {
        setTime((pre)=>pre+1);
    }, 1000);

}
```

In the above code, we are using the setTime function to update the time state value. instead of passing the new value directly, we are passing a callback function which takes the previous state value as an argument and returns the new state value. This is useful when the new state value depends on the previous state value.

if we dont use this it will call setTime(1) again and again and the time will always be 1. so to use updated value we use the callback function.