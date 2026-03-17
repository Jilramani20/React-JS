## <span style="color:blue;">useMemo - Hook</span> 

`useMemo` is a React Hook that lets you cache the resullt of a calculation bween re-renders. This can improve performance by avoiding expensive calculations on every render.

### <span style="color:orange;">Understand the problem in over project</span>
In our project, we have a Fibonacci calculation that is computationally expensive. Every time the component re-renders, the Fibonacci function is called again, even if the input number hasn't changed. This can lead to performance issues, especially when there are other state changes that cause re-renders.

so if we increment the count state, the Fibonacci calculation is re-executed unnecessarily. and UI slows down.

### <span style="color:orange;">How to use useMemo</span>
 
it takes two arguments: a function that returns a value, and an array of dependencies. The function is only re-executed when one of the dependencies changes.

```javascript
import React, { useMemo } from 'react';
const Fibonnaci = useCallback((n)=>{
        if(n<=1) return n;

        return Fibonnaci(n-1)+Fibonnaci(n-2);
    }, [])

    //useMemo (callback, dependancy array)

    const result = useMemo(()=>Fibonnaci(number), [number]);
```

here, the `Fibonnaci` function is memoized using `useCallback`, and the result of the calculation is memoized using `useMemo`. The calculation is only re-executed when the `number` state changes.

so if the other state changes, the cached result is used, improving performance. like if you increment the `count` the Fibonnaci calculation is not re-executed.


### <span style="color:orange;">Why not use useEffect</span>

if we want to use useEffect we would have to make a state to store the result and update it inside useEffect. this would cause an additional render every time the dependencies change, which can be inefficient for expensive calculations.

```javascript
const [result, setResult] = useState(0);

useEffect(()=>{
    setResult(Fibonnaci(number));
}, [number]);
```

here we know that useEffect will run after whole function is executed and initial render is done. then useEffect runs and updates the state, causing a re-render. so useMemo saves us from this extra render.


## <span style="color:blue;">useRef - Hook</span>

**Defination:** `useRef` is a React Hook that lets you referencea value that's not needed for rendering. It can be used to store a mutable value that persists across renders without causing re-renders when it changes.

### <span style="color:orange;">Understand the problem in our project</span>

```javascript
import React, {useCallback, useState, useEffect, useMemo, useRef} from "react";
import ReactDOM from 'react-dom/client';

function App(){
    const [count, setCount] = useState(0);

    let money = 0;

    return (
        <>
            <h2>Counter is : {count}</h2>
            <button onClick={()=>setCount(count+1)}> Increment</button>

            <h2>Money is : {money}</h2>
            <button onClick={()=>{
                money = money+1;
                console.log(money);
            }}> Increment</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
```

in over project, we have a `money` variable that we want to increment without causing a re-render of the component. here when we click the "Increment" button for money, the value of `money` is updated, but since it's not part of the component's state, the UI does not reflect this change.

but when we increment the `count` state, the component re-renders, and the `money` variable is reset to 0.

### <span style="color:orange;">How to use useRef</span>
we can use `useRef` to store the `money` variable so that it persists across renders without causing re-renders. it returns an object with a `current` property that can be used to store the mutable value.

```javascript
import React, {useCallback, useState, useEffect, useMemo, useRef} from "react";
import ReactDOM from 'react-dom/client';

function App(){
    const [count, setCount] = useState(0);

    const money = useRef(0);

    return (
        <>
            <h2>Counter is : {count}</h2>
            <button onClick={()=>setCount(count+1)}> Increment</button>

            <h2>Money is : {money.current}</h2>
            <button onClick={()=>{
                money.current = money.current+1;
                console.log(money.current);
            }}> Increment</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
```

here, the `money` variable is stored in a `useRef` hook. when we click the "Increment" button for money, we update the `current` property of the `money` ref. this does not cause a re-render, so the UI does not update. however, the value of `money.current` persists across renders.

when we increment the `count` state, the component re-renders, but the value of `money.current` remains unchanged.