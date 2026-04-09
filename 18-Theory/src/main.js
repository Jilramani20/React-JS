import React , {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Add from './component/Add';
function App(){

    const [language , setLanguage] = useState(["JAVA","JS","C++"]);

    function handleClick(){
        setLanguage(["PYTHON", ...language]);
    }
    return(
        <>
         <div style={{display: "flex", justifyContent:"center", gap: "20px", marginTop: "50px"}}>
            {
                language.map((value, index)=> <Add key={value} value={value}></Add>)
            }
         </div>

         <br></br>
         <br></br>
         <br></br>


         <button onClick={handleClick}>Add language</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);