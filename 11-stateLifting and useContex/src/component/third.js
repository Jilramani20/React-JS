import GlobalContex from "../Global"
import { useContext } from "react"
export default function Third(){

    const data = useContext(GlobalContex);

    return(
        <>
            <h2>I am printing {data.count} from third</h2>
            <button onClick={()=>data.setCount(data.count + 1)}>Increment</button>
        </>
    )
}