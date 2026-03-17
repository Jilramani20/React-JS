import React, {useState} from "react";
import ReactDOM from "react-dom/client";

//* React suggest that DOM-manipulation is handled by React itself, and we should not manipulate the DOM directly.

//* UseState used when we want to add state to our functional components. It allows us to manage and update state in a way that triggers re-rendering of the component when the state changes. This is essential for creating interactive and dynamic user interfaces in React.

function Counter(){
    let [count, setCount] = useState(0);
    //& useState is a hook that allows us to add state to our functional components. It returns an array with two elements: the current state value and a function to update that state value. In this case, we are initializing the count state to 0 and providing a setCount function to update it.

    //& fucntion working : When we call the incrementNumber function, it updates the count state by calling setCount with the new count value. This triggers a re-render of the Counter component, and the updated count value is displayed in the UI. The same process happens when we call the decrementNumber function to decrease the count. This way, we can manage and update state in our functional components using hooks like useState.

    function incrementNumber(){
        // count = count + 1;

        setCount(count+1);
        //^ When we call setCount with the new count value, React will re-render the component with the updated state, and the new count value will be displayed in the UI. This is how we can manage state in functional components using hooks.
        //* count+1 will calculate the new count value by adding 1 to the current count, and then setCount will update the state with this new value, triggering a re-render of the component to reflect the updated count in the UI.
        
        console.log("count value is : ", count);
        // document.querySelector('h1').innerText = `Count is : ${count}`;
        
    }
    function decrementNumber(){
        // count = count - 1;
        setCount(count-1);
        //^ same as above, when we call setCount with the new count value, React will re-render the component with the updated state, and the new count value will be displayed in the UI.
        console.log("count value is : ", count);
        // document.querySelector('h1').innerText = `Count is : ${count}`;
    }
    return (
        <div className="first">

        <h1>Count is : {count}</h1>
        <button onClick={incrementNumber}>Increment {count}</button>
        <button onClick={decrementNumber}>Decrement {count}</button>

        </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Counter/>)