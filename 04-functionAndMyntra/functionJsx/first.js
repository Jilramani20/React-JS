import React from "react";
import ReactDOM from "react-dom/client"

const ele1 = (
    <h1>Hello World!</h1>
)

//* in JSX : any JS Expression you can wright (Output lake de : result produce kare)

//! JSX : cannot write any statement (let x = 2)
//! Also cant write Object (can't understand object) 
//* in object if you write string,number => that is acceptable
//* => obj1.name = "string" => is acceptable
//! can't write if-else aslo

//* result produce hona chahiye : string, number , array

const arr = [20,40,"Luffy",10,"Jil"]; //* arr is acceptable in jsx
//! but Object in array is not allowed

//& normal method of function call
// function greet(name){
//     return <h2>{name} was one of the great thinker of the century</h2>
// };
// Root.render(greet("J.K."));


//& function call in jsx
//* first latter of function name should be capital
//* First latter capital means user define tag (in JSX)
// props = {
//     name:"Jeel",
//     age:"20"
// } 
//^ Props stores argument passed in function as object form
//* store automatically no need to write manually

function Greet(props){
    return (
    <h2>{props.name} is one of the great thinkers at the age of {props.age}</h2>
    )
};
const ele2 = <Greet name="Jeel" age="20" />; 
//^ <Greet/> : Function call
//* name , age will go as a argument to Greet function

//& Argument pass in jsx function
const ele3 = <h1 id="first" className="Second">Hello</h1> 
//* id , className is arguments of h1



const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(ele1);
Root.render(ele2);
