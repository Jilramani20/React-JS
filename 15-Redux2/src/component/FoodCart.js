import { useState } from "react";
import { addToCart, removeFromCart } from "./sliceSwiggy";
import { useDispatch } from "react-redux";
export default function FoodCart({ value }){

    const dispatch = useDispatch();
     const [inCart, setInCart] = useState(false);
    function handleCart(){
        if(inCart){
            dispatch(removeFromCart());
            setInCart(false);
        }
        else{
            dispatch(addToCart());
            setInCart(true);
        }
    }

    return(
        <>
            <h1>{value.name}</h1>
            <p>Price: ${value.price}</p>
            <button onClick={handleCart}>{inCart ? "Remove" : "Add"}</button>
        </>
    )
}