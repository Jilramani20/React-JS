import React , {useCallback, useState, useEffect, useMemo, useRef} from "react";
import ReactDOM from "react-dom/client";

function App(){


     const [count, setCount] = useState(0);

     const money = useRef(0);
     //* this is stored as object in memory and one key is current that stores the value of money and it is mutable and does not cause re-render when it changes
    //  console.log(money.current);
     

    return(
        <>
           <h1>Counter is : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            
            <h2>Money is : {money.current}</h2>
             <button onClick={()=>{
                money.current = money.current + 1;
                console.log(money.current); //* useRef does not cause re-render when it changes so we need to log it here to see the change
             }}>Increment</button>


        </>
    )
}
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);