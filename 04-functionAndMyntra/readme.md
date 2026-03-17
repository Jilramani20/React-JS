## <span style="color: blue">How to Use Vite</span>

Just follow these steps to get started with Vite:
1. `npm create vite@latest` - This command will prompt you to enter a project name and select a framework.
2. `cd your-project-name` - Navigate into your newly created project directory.
3. `npm install` - Install the project dependencies.
4. `npm run dev` - Start the development server and open your project in the browser

## <span style="color: blue">You have to make first later of function capital ?</span>

There is other way to call function in JSX not in react but in JSX only.

```jsx
const element = <MyComponent />;
function MyComponent() {
    return <h1>Hello from MyComponent</h1>;
}
```

Here MyComponent is a function which is returning JSX code. so when we call this function in JSX we have to make first letter capital otherwise it will give error.

because when JSX see a tag with small letter it think its an HTML tag but when it see a tag with capital letter it think its a component (function here).

### <span style="color: orange">How to pass argument in function </span>
You can pass argument in function like this:

```jsx
const element = <MyComponent name="Het" />;
function MyComponent(props) {
    return <h1>Hello {props.name} from MyComponent</h1>;
}
```

pops is an object which contain all the attributes passed in the component.