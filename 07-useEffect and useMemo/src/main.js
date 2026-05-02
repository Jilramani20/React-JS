import React , {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./component/Colorful";

//* Background color changer

function Main(){

    const [count, setCount] = useState(0);

    return (
        <>
        <div className="counter">
        <h1>Counter is : {count}</h1>
        <button id="increment" onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>

        <Colorful/>
        </>
    )
}



const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Main/>);