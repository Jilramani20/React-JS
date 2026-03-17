import React from "react";
import ReactDOM from "react-dom/client"

//& create element in REACT using JSX (javascript Xml) //* HTML like code in javascript (not a part of react)

// const newElement = <h1 id="third">Hello World!</h1> //* JSX (JS or React not understand this) => for conversion to react code use babel (already in parcel (node module))
//* babel => JSX to React

//*    babel                  React                      Render
//^ JSX => React.creatElement() => react element(JSObject) => HTML Element



//& You can use <></> -> JSX allow it. so you need not have to add extra div (wrap up in <>...</>)
    //& in JSX you need to write className (different form html)
    //& in JSX : you can write JS expression (different form html)

    //! { } => means write JS inside (If you want JS in JSX you need to wright JS in { } )

const name = "Marshal.D.Teach";
const obj = {
    age:40,
    bounty: "4 Billion"
}
const style1 = {
    backgroundColor: "Blue",
    color: "Pink",
    fontSize:"30px"
}

//& React element
const newElement = ( //* it acspect a single element inside so we use <>..</>

    <>  
        <h1 id="first" className="heading">AKAGAMI SHANKS HERE! Bounty : {obj.bounty}</h1> 
        <h2 id="second" className="heading" style={style1}>You need to hide {name}</h2>
    </>
)


//& React Component
//^ 1) class based component => old method (not used nowadays)

//^ 2) function based component -> how to write function in react
function greet(){
    return <h1>Holy land is in chaos</h1>
};

const meet = ()=>{
    return <h2>Loki is on the move</h2>
}

//* call the function
const Ele2 = greet();
const Ele3 = meet();

const Ele4 = (
    <>{Ele2} {Ele3}</>
)

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(newElement);
Reactroot.render(Ele2);
// Reactroot.render(meet()); //* you also can directly render

Reactroot.render(Ele4); //* both function together



