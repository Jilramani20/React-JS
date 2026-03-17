
//^ Create element through JS

// const header1 = document.createElement('h1');

// header1.innerText = "Hello, People of the world";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement('h2');

// header2.innerText = "ARE YOU READY?";
// header2.style.backgroundColor = "red";
// header2.style.fontSize = "25px";
// header2.style.color = "white";

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);

//^ using REACT(Optimized)


const React = { //! js object
    createElement: function(tag,styles,children){
       const element =  document.createElement(tag);
     
       //* if children is array
       if(typeof children == 'object'){
            for(let val of children){
                element.append(val);
            }
       }
       else{
            //* text
            element.innerText = children;
       }
       //* style(iterate)
        for(let key in styles){
            element.style[key] = styles[key];
        }
       return element;
    }
}

//& Object for DOM manipulation

const ReactDOM = { //! js object
    render: function(element,root){
        root.append(element);
    }
}

const h1Style = {
    fontSize: "30px",
    backgroundColor: "blue",
    color: "white"
}
const h2Style = {
    fontSize: "25px",
    backgroundColor: "red",
    color: "white"
}
const header1 = React.createElement('h1',h1Style,"Hello world!");
const header2 = React.createElement('h2',h2Style,"ARE YOU READY?");


//^Create unordered list
const ulStyle = {
    fontSize: "20px",
    backgroundColor: "purple",
    color: "white"
}
//* creating children for ul
const li1 =React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JAVASCRIPT");
const ul = React.createElement('ul',ulStyle,[li1,li2,li3]);


const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);
ReactDOM.render(header1,root);
ReactDOM.render(header2,root);

ReactDOM.render(ul,root);

