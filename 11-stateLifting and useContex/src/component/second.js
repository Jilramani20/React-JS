import GlobalContex from "../Global.js";
import Third from "./third.js";
import { useContext } from "react";
export default function Second(){


  const data = useContext(GlobalContex)
  return(
    <>
        <h2>How are you {data.count}</h2>
        <Third  />
    </>
  )
}