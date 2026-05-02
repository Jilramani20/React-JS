### <span style="color:#ff8c00">To run the code</span>
`npx parcel index.html` -> to run the code 
it will create .parcel-cache folder to store the cache files. so that it can run the code faster next time.

`npx parcel build index.html` -> for production ready code 

It will create a dist folder which will have the production ready code of all the files like .html, .css, .js and a .map file

>.map file

It will also create a .js.map which is used to convert the minified code back to the original code for debugging purpose. you don't need to upload this file to the server.

`npm install react`

`npm install react-dom`

import React from "react"; -> to use in js files

import ReactDOM from "react-dom/client"; -> to use in js files 


## <span style="color:#ff8c00">JSX</span>

JSX: javascript XML

you can write HTML like code directly in js using JSX this is not part of react.

we can also write JS expressions inside JSX using `{}` but you cannot write statements like `if, for, declare variable using let, const etc.` objects are also not allowed directly inside JSX. but you can write like `object.key`


so if you want to write a stylein JSX you can write it like this:

```jsx
const element = <h1 style={{color: "white", backgroundColor: "black", fontSize: "30px"}}>Hello Everyone!</h1>

// or

const styleObj = {
    color: "white",
    backgroundColor: "black",
    fontSize: "30px"
};
const element = <h1 style={styleObj}>Hello Everyone!</h1>
```

why double {{}} ? because first {} (to tell that we gonna use js expression now ) is for writing JS expression inside JSX and second {} (because style tag expect an object) is for writing object in JS.

>babel

It is a transpiler which converts JSX code to React.createElement() code which browser can understand. bundller like parcel, webpack use babel to convert JSX to React.createElement code.

JSX => React.createElement() => browser

so in short JSX is transformed by Babel into React.createElement, and bundlers package the final JavaScript for the browser.

## <span style="color:#ff8c00">React Components</span>

There are two types of components in react:
1. Functional based Components
2. Class based Components (not used now a days)

Functional based is nothing but function in js wihch mostly return JSX code.