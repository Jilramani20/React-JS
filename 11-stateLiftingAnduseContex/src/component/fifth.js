import GlobalContex from "../Global";
import { useContext } from "react";

export default function Fifth(){
    const data = useContext(GlobalContex);

    return(
        <>
            <h2>Main hu Don {data}</h2>
        </>
    )
}