
//& create element in REACT

const element = React.createElement('h1',{},"Hello Coder army"); // (tag,properties,children)

// ReactDOM.render(element,document.getElementById('root'));//* not valid in react 18

//* new way of render
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
//&React root container (root is under control of Reactroot)
Reactroot.render(element);