import { useState } from "react"
import { useDispatch } from "react-redux";
import { CustomIncreaser } from "./Slicer1";
export default function CustomCounter(){

    const [number , setNumber] = useState("");
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(CustomIncreaser(Number(number)));
        setNumber(""); //* reset the input field after dispatching the action
    }

    return(
        <>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} ></input>
        <button onClick={handleClick}>Submit</button>
        </>
    )
}