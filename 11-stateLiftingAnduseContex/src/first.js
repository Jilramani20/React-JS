import React , {useCallback, useState, useContext, useEffect, useMemo, useRef} from "react"
import ReactDOM from "react-dom/client"
import Second from "./component/second";
import Third from "./component/third";
import GlobalContex from "./Global";
import Fifth from "./component/fifth";

function App(){
    const [count, setCount] = useState(10);

    return(
        <>
          <Fifth/>
          <GlobalContex.Provider value={{count, setCount}}>
               <h1> Hello From the Parent  </h1>
                <Second />
          </GlobalContex.Provider>
           
        </>
    )
}
//* we passed props to the child component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);