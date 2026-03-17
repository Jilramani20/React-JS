## <span style="color:red">useParams</span>

### <span style="color:orange">Dyanamic Routing ?</span>

Dynamic Routing is a technique in web development where the content of a webpage is generated dynamically based on user interactions or parameters in the URL. This allows for more personalized and relevant content to be displayed to users.

For example, in a blog application, when a user clicks on a specific blog post link, the URL may contain a unique identifier for that post (e.g., `/blog/123`). The server or client-side application can then use this identifier to fetch and display the corresponding blog post content dynamically.

### <span style="color:orange">How to add Dyanamic Routing?</span>

To add dynamic routing you have to use `:` before the parameter name in the route path.

```jsx
<Route path="/gihub/:name" element={<Github />} />
```

now you can access the parameter `name` in the `Github` component using the `useParams` hook from `react-router`.

### <span style="color:orange">useParams Hook</span>

The `useParams` hook is a built-in hook provided by the `react-router` library that allows you to access the parameters of the current route. It returns an object containing key-value pairs of the dynamic parameters defined in the route path.

Here's an example of how to use the `useParams` hook:

```jsx
import { useParams } from 'react-router';

const Github = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>GitHub User: {name}</h1>
    </div>
  );
};
```

In this example, when the user navigates to a URL like `/github/johndoe`, the `name` parameter will be extracted from the URL, and the component will display "GitHub User: johndoe".

## <span style="color:red">Custom Hooks</span>

It just means that you can create your own hooks to reuse stateful logic across multiple components. Custom hooks are JavaScript functions that start with the word "use" and can call other hooks inside them.

### <span style="color:orange">Why use Custom Hooks?</span>

Custom hooks allow you to encapsulate and reuse logic that is common across multiple components, making your code more modular and easier to maintain. They help in reducing code duplication and improving readability.

also to make your code cleaner and more organized by separating concerns.

### <span style="color:orange">How to create a Custom Hook?</span>

you just need to create a function that starts with the word "use" and inside that function, you can use other hooks like `useState`, `useEffect`, etc.

and put your logical code inside that function and return whatever you want to expose to the components that will use this custom hook.

example without custom hook:

```jsx
import { useState, useEffect } from 'react';
const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, [userId]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
    </div>
  );
};
```
example with custom hook:

```jsx
import { useState, useEffect } from 'react';

function Github(){
    const { name } = useParams();
    const userData = useFetchUser(name);
    async function fetchUser(){
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();
        setUser(data);
        
    }

    useEffect(()=>{
        fetchUser();
    }, [])  

    if (!userData) return <div>Loading...</div>;
    
    return (
        <div>
        <h1>{userData.name}</h1>
        <p>{userData.email}</p>
        </div>
    );
}
```

now you can create a custom hook `useFetchUser` to encapsulate the fetching logic:

```jsx
import { useState, useEffect } from 'react';
function useFetchUser(name) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://api.example.com/users/${name}`);
      const data = await response.json();
      setUserData(data);
    }

    fetchUser();
  }, [name]);

  return userData;
}
```

and now you can use this custom hook in your `UserProfile` component:

```jsx
import { useParams } from 'react-router';
import useFetchUser from './useFetchUser';
const UserProfile = () => {
  const { name } = useParams();
  const userData = useFetchUser(name);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
    </div>
  );
};
```

In this example, the `useFetchUser` custom hook encapsulates the logic for fetching user data based on the provided `name` parameter. This makes the `UserProfile` component cleaner and more focused on rendering the UI.
