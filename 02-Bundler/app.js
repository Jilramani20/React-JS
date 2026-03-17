
//&  create element in REACT

const element = React.createElement('h1',{id:"first",className:"heading",style:{backgroundColor:"blue",fontSize:"30px",color:"orange"}},"Hello Coder army"); // (tag,properties,children)

const element2 = React.createElement('h2',{id:"second",className:"heading",style:{backgroundColor:"red",fontSize:"30px",color:"white"}},"Let the game begin!");


//* way of render
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
//&React root container (root is under control of Reactroot)

// Reactroot.render(element); //^ if content present in div#root then it will be replaced by element
// Reactroot.render(element2); //^ now element is replaced by element2 (not both element and element2 are rendered in the div#root)

//& if we want to render both element and element2 then we have to wrap them in a single parent element
const container = React.createElement('div',null,[element,element2]); // (tag,properties,children)
Reactroot.render(container); //* now both element and element2 are rendered in the div#root