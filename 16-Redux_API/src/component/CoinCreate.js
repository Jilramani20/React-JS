import { useDispatch, useSelector } from "react-redux"
import { FetchData } from "./slicer1";
import CoinCard from "./CoinCard";
import { useEffect } from "react";

export default function CoinCreate() {

   const dispatch = useDispatch();
   const {data, loading, error} = useSelector((state)=>state.slice1); //* accessing the state from the store

    useEffect(()=>{
        dispatch(FetchData(20)); //* dispatching the asyncThunk action to fetch data from API
    },[dispatch])

    //* Display information of 20 user
     if(loading){
        return <h1>Data is loading</h1>
    }
    if(error){
        return <h1>Error has ocurred: {error}</h1>
    }

    return(
        <>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {data.map((value)=><CoinCard key={value.id} coin={value}/>)}
            </div>
        </>
    )

}