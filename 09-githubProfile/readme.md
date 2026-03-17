### <span style="color: orange;">Github APIS</span>

you can only do 60 requests per hour without authentication.

https://api.github.com/users/{username}

https://api.github.com/users?per_page=${count}

https://api.github.com/users?since=6000&per_page=${count} //since means from which user id you want to fetch users.


## <span style="color: blue;">How to give control of from input DOM to react</span>

Whenver user types something in input box, react has no idea about it. DOM manipulation is done by browser only.

To give control to react, we can use onChange event on input box with useState hook.

```jsx
const [input, setInput] = useState();
<input type="number" value={input} onChange={(e)=>setInput(e.target.value)}  />
```

here, whenever user types something in input box, onChange event is triggered, which calls setInput function to update the state variable 'input'. Since we have provided value={input} to input box, react will update the value of input box with the updated state variable 'input'. Thus, react now has control over the input box.