
export default function Decrement({counts, setCounts}){
    return(
        <>   
            <button onClick={()=>setCounts(counts-1)}>Decrease</button>
        </>
    )
}

