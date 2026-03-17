## <span style="color: red;">React Router</span>

### <span style="color: orange;">Problem?</span>

In HTML, we use anchor (`<a>`) tags to create links between different pages. 

when we click on an anchor tag, the browser makes a request to the server to fetch the new page, which causes a full page reload. This is not ideal for single-page applications (SPAs) built with React, as it disrupts the user experience.

In react we only have a single HTML file (usually `index.html`) that loads our React application. To navigate between different views or components without reloading the entire page, we use a library called **React Router**.

### <span style="color: orange;">Solution?</span>

React Router is a popular library for handling routing in React applications. It allows us to define different routes in our application and map them to specific components. When a user navigates to a different route, React Router updates the URL and renders the corresponding component without reloading the entire page.

### <span style="color: orange;">How to use React Router</span>

1. **Installation**: First, we need to install React Router using npm or yarn:

   ```bash
   npm install react-router-dom
   ```
2. **Setting up Routes**: We can set up routes in our React application using the `BrowserRouter`, `Route`, and `Route` components provided by React Router.

    ```jsx
    import ReactDOM from "react-dom/client"
    import {BrowserRouter, Routes, Route} from "react-router";
    import Home from "./components/Home"
    import Contact from "./components/Contact"
    import Dashboard from "./components/Dashboard"

    function App () {

        return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
            </BrowserRouter>
        )    
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />)
    ```

    In this example, we define three routes: `/`, `/Contact`, and `/Dashboard`, each mapped to a different component.

    We wrap our application in the `BrowserRouter` component, which enables routing functionality. Inside it, we use the `Routes` component to define our routes using the `Route` component.

    Here `Router` says that just show one of the routes at a time based on the URL.

3. **Navigating Between Routes**: To navigate between different routes, we can use the `Link` component provided by React Router instead of anchor (`<a>`) tags.

    ```jsx
    import { Link } from "react-router-dom";
    import {BrowserRouter, Routes, Route, Link} from "react-router";
    import Home from "./components/Home"
    import Contact from "./components/Contact"
    import Dashboard from "./components/Dashboard"

    function App () {

        return (
            <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Dashboard">Dashboard</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
            </BrowserRouter>
        )    
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />)
    ```

    In this example, we use the `Link` component to create navigation links to different routes. The `to` prop specifies the target route.

    When a user clicks on a `Link`, React Router updates the URL and renders the corresponding component without reloading the entire page.

### <span style="color: orange;">How to add nested routes?</span>

To add nested routes in React Router, we can define child routes within a parent route. This allows us to create a hierarchical structure of routes.
Here's an example of how to set up nested routes:

```jsx
import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route, Link} from "react-router";
import Home from "./components/Home"
import Contact from "./components/Contact"
import Dashboard from "./components/Dashboard"
import Detailes from "./components/Detailes";
import Hello from "./components/Hello"
import Hi from "./components/Hi"
import Zero from "./components/Zero";


function App () {

    return (
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Detailes">Detailes</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Detailes" element={<Detailes />}>
                <Route index element={<Zero />} />
                <Route path="Hello" element={<Hello />} />
                <Route path="Hi" element={<Hi />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )    
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
```

In this example, we have a parent route `/Detailes` that contains three nested routes: `Hello`, `Hi`, and an index route that renders the `Zero` component by default when the user navigates to `/Detailes`.

keep in mind that the paths for nested routes are relative to the parent route. So, the full paths for the nested routes would be `/Detailes/Hello` and `/Detailes/Hi` so when defining the nested routes, we only need to specify the relative paths we dont have to use a leading slash (`/`).

Index route is a special route that renders when no child routes are matched. It is defined using the `index` prop on the `Route` component.

To render the nested routes, we need to use the `Outlet` component from React Router in the parent component (`Detailes` in this case):

```jsx
import { Outlet, Link } from "react-router-dom";
function Detailes() {
    return (
        <div>
            <h2>Detailes Page</h2>
            <nav>
                <Link to="Hello">Hello</Link>
                <Link to="Hi">Hi</Link>
            </nav>
            <Outlet />
        </div>
    );
}
```

In this `Detailes` component, we include the `Outlet` component, which serves as a placeholder for rendering the matched child routes. When a user navigates to `/Detailes/Hello`, the `Hello` component will be rendered inside the `Outlet`, and similarly for `/Detailes/Hi`.

### <span style="color: orange;">What is Outlet?</span>

In nested routes, we need to know which components to render and where to render them in parent component. The `Outlet` component provides that functionality by acting as a placeholder for the child routes.

When a user navigates to a nested route, React Router will automatically render the corresponding child component inside the `Outlet` component of the parent component. This allows us to create a seamless navigation experience within our application without reloading the entire page.

Here Outlet is used in the `Detailes` component to render the nested routes `Hello`, `Hi`, and the index route `Zero`.

