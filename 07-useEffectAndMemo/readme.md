## <span style="color:blue;">useEffect - Hook</span>

### <span style="color:orange;"> Why we need useEffect ?</span>

always use useEffect whenver we manipulate DOM or do data fetching.

In React, components can have side effects, such as fetching data from an API, subscribing to events, or manually changing the DOM. The `useEffect` hook allows you to perform these side effects in functional components.

### <span style="color:orange;"> How to use useEffect ?</span>

The `useEffect` hook takes two arguments: a function that contains the side effect logic, and an optional dependency array that specifies when the effect should be re-run.

```javascript

//useEffect(callback, [dependencies]);

import React, { useState, useEffect } from 'react';
useEffect(()=>{
        console.log("executed");
        
         document.body.style.backgroundColor = color;
    }, [color]); //here color is dependency

```
  dependency array means that the callback function will be called only when the value of color changes. So, when we click on any button, it will call the function again and update the background color of the page.

In this example, the effect will run whenever the `color` state changes, updating the background color of the document body.

### <span style="color:orange;"> How it works ?</span>

`useEffect` always runs after whole function is executed.

1. The effect runs after the initial render.
2. If the dependency array is provided, the effect will only re-run when one of the dependencies changes.
3. If the dependency array is empty, the effect will only run once when the component mounts.


## <Span style="color:blue;"> Memo - Hook</span>

### <span style="color:orange;"> Why we need Memo ?</span>
In React, when a parent component re-renders, all of its child components also re-render by default. This can lead to unnecessary re-renders and performance issues, especially if the child components are complex or if they receive props that haven't changed.

for example : 

```javascript
function Main(){

    const [count, setCount] = useState(0);

    return (
        <>
            <div className="counter">
                <h1>Counter is : {count}</h1>
                <button onClick={() => setCount(count + 1)} style={{backgroundColor: "black"}}>Increment</button>
            </div>
            <Colorful/>
        </>
    )
}
```

here whenver count is incremented, Main function is re executed and Colorful component is also re rendered even though there is no change in Colorful component.

to prevent this unnecessary re-rendering, we can use the `React.memo` higher-order component. which memorizes the result of a component and only re-renders it if its props change.

### <span style="color:orange;"> How to use Memo ?</span>
To use `React.memo`, you simply wrap your component with it when exporting or defining the component.

```javascript
import React from 'react';
const Colorful = React.memo(() => {
    // component logic
});
export default Colorful;
```
### <span style="color:orange;"> How it works ?</span>
When a component is wrapped with `React.memo`, React will compare the current props with the previous props. If the props are the same, React will skip rendering the component and reuse the last rendered output. If the props have changed, React will re-render the component as usual.

//* when parent component is frequently re-rendering and child component is not re-rendering, then we can use react memo to prevent child component from re-rendering. So, when we click on any button, it will call the function again and update the background color of the page, but it will not re-render the child component.

//* raect memo render the child when props is changing but in this case we are not passing any props to the child component, so it will not re-render the child component.