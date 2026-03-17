import React , {useCallback, useState, useEffect, useMemo, useRef} from "react"
import ReactDOM from "react-dom/client"
import Increment from "./component/increment";
import Decrement from "./component/decrement";

function App(){
    const [count, setCount] = useState(0);

    return(
        <>
            <h1> Hello From the Parent  </h1>
            <Increment counts={count} setCounts={setCount} />
            <Decrement counts={count} setCounts={setCount} />
        </>
    )
}
//* we passed props to the child component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);