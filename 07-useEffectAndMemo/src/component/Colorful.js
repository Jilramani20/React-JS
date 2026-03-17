
import React ,{ useEffect, useState } from "react";


function Colorful(){
    const [color, setColor] = useState("black");
        // console.log("render");
        
        useEffect(()=>{
            console.log("useEffect Executed");
            document.body.style.backgroundColor = color;
        },[color]); 
     
        
        return (
            <>
            
            <h1>Background Color Changer</h1>
    
            <div className="Buttons">
                <button id="red" onClick={()=>setColor("red")}>Red</button>
                <button id="green" onClick={()=>setColor("green")}>Green</button>
                <button id="blue" onClick={()=>setColor("blue")}>Blue</button>
                <button id="yellow" onClick={()=>setColor("yellow")}>Yellow</button>
                <button id="purple" onClick={()=>setColor("purple")}>Purple</button>
            </div>
            
            </>
    
        );
}

export default React.memo(Colorful);


