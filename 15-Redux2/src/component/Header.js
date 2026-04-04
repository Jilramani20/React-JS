import { useSelector } from "react-redux"


export default function Header(){

    const count = useSelector((state) => {
        return state.swiggySlice.count;
    })

    return(
        <div>
            <h1>Swiggy</h1>
            <h2>Cart : {count}</h2>
        </div>

    )
}