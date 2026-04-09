### <span style="color: #orange;">Why we cannot use array index as key?</span>

We proved before that keys are attached to components state.

Now, imagine we have a voting system where there is a button that add a new candidate at the start of the list.

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/counter";

function App(){

    const [language, setLagauage] = useState(['TS', 'JS', 'Java', 'C++']);

    function handleClick(){
        setLagauage(['C', ...language]);
    }

    return(<>
        <div style={{display: "flex", justifyContent:"center", gap: "20px", marginTop: "50px"}}>
            {
                language.map((value, index)=> <Counter key={index} value = {value} />)
            }
        <button onClick={handleClick}>AddLanguages</button>
    </>)
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

Now lets say vote for `TS` is 1, `JS` is 2, `Java` is 3 and `C++` is 4.

Now when we add `C` at the start of the list, the array becomes `['C', 'TS', 'JS', 'Java', 'C++']`.

so key `0` is now assigned to `C`, key `1` is assigned to `TS`, key `2` is assigned to `JS` and so on.

and we prove that state is attached to key, so now `C` will have vote count of `TS`, `TS` will have vote count of `JS` and so on.

>also if we dont provide key, react will use array index as default key

Now you know why its not a good idea to use array index as key.


### <span style="color:orange;">In vanilla JS, When we update the DOM, the whole DOM is re-rendered ?</span>

No, in vanilla JS when we update the DOM, only the part of the DOM that needs to be updated is changed.

because even react is built on top of vanilla JS, so react also uses the same approach of updating only the part of the DOM that needs to be updated.

we can make above example in vanilla JS to understand this better.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>

    <!-- <script type="module" src="./src/main.js"></script> -->
     
    <h1 id="C">C: 0</h1>
    <button id="c">Vote</button>

    <h1 id="CPP">C++: 0</h1>
    <button id="cpp">Vote</button>

    <h1 id="Java">Java: 0</h1>
    <button id="java">Vote</button>

    <script type="module" src="./src/vanila.js"></script>
</body>
</html>
```

```js
const c = document.querySelector('#C');
document.querySelector('#CPP');
document.querySelector('#JAVA');

const cbtn = document.querySelector('#c');

cbtn.addEventListener('click', () => {
    const text = c.textContent;
    const number = Number(text.split(": ")[1]);
    c.textContent = `C: ${number + 1}`;
})

```
In above example, when we click on the vote button for `C`, only the text content of the `C` heading is updated. The rest of the DOM remains unchanged.