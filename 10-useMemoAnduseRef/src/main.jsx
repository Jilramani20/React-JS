import React , {useCallback, useState, useEffect, useMemo} from "react";
import ReactDOM from "react-dom/client";

function App(){

        //* counter & fibbonnaci number generator
        const [count,setCount] = useState(0);
        const [number, setNumber] = useState("");
        // const [result, setResult] = useState(0); //* for useEffect

        const Fibbonnaci = useCallback((n)=>{
            if(n<=1) return n;
            return Fibbonnaci(n-1) + Fibbonnaci(n-2);
        },[]);

        //* Or you can write function outside of App so it will not allocate memory every time when the component re-render. But if you want to write function inside the component then you can use useCallback hook to memorize the function and it will return the same instance of the function until the dependencies change.

        //* useMemo (callback, dependancy array)
        const result = useMemo(() => Fibbonnaci(number), [number]);


             //& with useEffect
            // const [result, setResult] = useState(0);
            // useEffect(()=>{
            //     setResult(Fibonnaci(number));
            // }, [number])

            //& useEffect executes at last so you need to re-render one extra time to see the result. But with useMemo you can see the result in the same render without re-rendering the component.


        return(
            <>
                <h1>Counter is : {count}</h1>
                <button onClick={()=>setCount(count+1)}>Increment</button>
                <button onClick={()=>setCount(count-1)}>Decrement</button>

                <div>
                    <h2>Fibbonnaci number is : {result}</h2>
                    <input type="number"  max={30} value={number} 
                    onChange={(e)=>setNumber(e.target.value)}></input>
                </div>

            </>
        )
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);