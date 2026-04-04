import { useSelector , useDispatch} from "react-redux";
import { Increment, Decrement, Reset } from "./Slicer1";

export default function Counting(){

    const count = useSelector((state) => state.slice1.count);
    const dispatch = useDispatch();

    return(
        <>
         <h1>Counter is : {count}</h1>
         <button onClick={()=>dispatch(Increment())}>Increment</button>
         <button onClick={()=>dispatch(Decrement())}>Decrement</button>
         <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}

//* useSelector is used to access the state from the store. It takes a function as an argument that returns the part of the state we want to access. In this case, we are accessing the count property from slice1. We can use this count variable to display the current count in our component. We will also need to dispatch actions to update the count when the buttons are clicked, but that will be done in the next steps.