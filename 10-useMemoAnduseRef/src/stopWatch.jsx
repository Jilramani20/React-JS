import React , {useCallback, useState, useEffect, useMemo, useRef} from "react";
import ReactDOM from "react-dom/client";

function StopWatch(){

     const [time, setTime] = useState(0);
     const intervalRef = useRef(null);

     function start(){
       if(intervalRef.current==null){
        
         intervalRef.current = setInterval(()=>{
            setTime((prevTime)=>prevTime+1);
            //* callback fun in setTime is used to get the previous value of time and update it, this is because setInterval runs every second and if we use setTime(time+1) then it will always take the initial value of time which is 0 and update it to 1, so we need to use callback fun to get the updated value of time and update it accordingly
        },1000);
       }
     }

     function stop(){
        if(intervalRef.current){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
     }

     function reset(){
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setTime(0);
     }

    return(
        <>
            <h1>Time is : {time}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<StopWatch/>);