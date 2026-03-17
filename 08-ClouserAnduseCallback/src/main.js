import React , {useState,useEffect,useCallback} from "react";
import ReactDOM from "react-dom/client";

//* RUN : with update and render the component. This is re-rendering the component with different state value. Whenever we change the state value, the component will re-render and update the UI with new state value.

// Password: cndjcjhfknck. setPassword("cndjcjhfknck"); //^ [variable , function()]
// length: 19, setLength(19);
// numberChanged: false, setnumberChanged(false);
// characterChanged: true, setcharacterChanged(true);

//& all setState function is stored by reference in memory

//* The password generation logic relies on component state, so it
//* should be declared inside the component below. The effect hook also
//* belongs there to use React's hook rules.

//* when length, numberChanged, or characterChanged changes then only
//* generatePassword function will call and update the password. This is
//* an optimization technique to avoid unnecessary function calls and
//* re-rendering of the component.

function PasswordGenerator(){

    const [Password, setPassword] = useState("");

    const [length, setLength] = useState(10);

    const [numberChanged, setnumberChanged] = useState(false);

    const [characterChanged, setcharacterChanged] = useState(false);

    //* every time when the component re-render then this function will create a new instance of the function and this is not good for performance. So we can use useCallback hook to memorize the function and it will return the same instance of the function until the dependencies change.
    const generatePassword = useCallback(() => {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged){
            str += "0123456789";
        }
        if(characterChanged){
            str += "!@#$%^&*()_+{}?";
        }

        let pass = "";
        for(let i=0;i<length;i++){
           pass += str[Math.floor(Math.random() * str.length)];
        }
        setPassword(pass);
    },[length, numberChanged, characterChanged]);

    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    return(
        <>
            <h1>Password : {Password}</h1>

            <div className="second">
                <input type="range" min={5} max={25} value={length} 
                onChange={(e)=>setLength(e.target.value)}></input>
                <label>Length is : ({length})</label>

                <input type="checkbox" checked={numberChanged} 
                onChange={()=>setnumberChanged(!numberChanged)}></input>
                <label> Number </label>

                <input type="checkbox" checked={characterChanged} 
                onChange={()=>setcharacterChanged(!characterChanged)}></input>
                <label> Character </label>


            </div>
        </>
    );
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<PasswordGenerator/>);