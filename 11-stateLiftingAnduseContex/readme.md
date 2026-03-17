## <span style="color: red;"> State Lifting in React</span>

### <span style="color: orange;">First understand the problem?</span>

Lets say you have a code like this:

```jsx
function App () {
    const [count, setCount] = React.useState(0);

    return (<>
        <h1>Hello Everyone from Main</h1>
        <Increment count={count} setCount={setCount}/>
        <Decrement count={count} setCount={setCount} />
    </>)
}
```

here you can pass the state and the setState function to the child components.

But what if count and setCount is declared in Increment component and you want to use it in Decrement component?

we just have to lift the state up to the common parent component.

### <span style="color: orange;">How do we lift the state up ?</span>

Just declare the state in the common parent component and pass it down as props to the child components.

```jsx
function App () {
    const [count, setCount] = React.useState(0);

    return (<>
        <h1>Hello Everyone from Main</h1>
        <Increment count={count} setCount={setCount}/>
        <Decrement count={count} setCount={setCount} />
    </>)
}
```

This is called state lifting in React nothing fency.

## <span style="color: red;"> useContext - Hook</span>

### <span style="color: orange;">Let's understand the problem ?</span>

Lets say you have to pass some data from a parent component to a deeply nested child component.

I mean you want to pass some data from parent to parent's child's child and so on until it reaches the deeply nested child component also the middle child components don't need that data.

you can pass props at every level it is called prop drilling but it is not a good practice ans it also makes the code messy also it couses unnecessary re-renders of the middle child components.

what if we make a global file that every child can access? so we don't have to pass props at every level.

useContext hook is used to solve this problem. It allows you to share data between components without passing props at every level.

### <span style="color: orange;">How to create contex ?</span>

you first have to create a flie where you will create a context using createContext() method.

```jsx
import { createContext } from "react";

const GlobalContext = createContext("Het");

export default GlobalContext;
```

you can put any default value in createContext() method.

### <span style="color: orange;">How to provide contex ?</span>

you have to wrap your component tree with the Context.Provider component and pass the value you want to share as a prop to the Provider component.

```jsx
import React, { useContext, useState, useContext } from "react";
import ReactDOM from "react-dom/client"
import Secound from "./Components/Secound";
import GlobalContext from "./Global";

function App () {

    const [count, setCount] = React.useState(0);

    return (<>
        // <GlobalContext.Provider value={{count: count, setCount: setCount}}>
        // if key and value both are same then you can write like this also

        <GlobalContext.Provider value={{count, setCount}}>
        <h1>Hello Everyone from Main</h1>
        <Secound />
        </GlobalContext.Provider> 

        <Fifth />
    </>)
}
```

now the default value of the context is replaced with the value provided in the Provider component.

It only provides the value to the components inside the Provider component. other components outside the Provider component will get the default value of the context.
Fifth component will get the default value of the context which is "Het".

### <span style="color: orange;">How to consume contex ?</span>

you can use useContext hook to consume the context in any child component.

```jsx
import GlobalContext from "../Global"
import { useContext } from "react"

export default function Thrid (){

    const data = useContext(GlobalContext);

    return(<>
        <h2>I am printing {data.count}</h2>
    </>)
}
```