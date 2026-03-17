## <span style="color: blue;">Components</span>

As a developer, putting all the code in a single file can quickly become unmanageable. To keep your code organized and maintainable, it's essential to break it down into smaller, reusable pieces called components.

### <span style="color: orange"> What are Components?</span>
It's nothing but a function that returns a piece of UI. Components can be as simple as a button or as complex as an entire page layout. By breaking your UI into components, you can reuse them across different parts of your application, making your code more modular and easier to maintain.

### <span style="color: orange">How we use that components in main file </span>
To use components in your main file, you typically follow these steps:
1. **Export the Component**: First, ensure that the component you want to use is exported from its file. You can do this using either a named export or a default export.


   ```javascript
   // MyComponent.js
   import React from 'react';

   function MyComponent() {
        return <div>This is my component!</div>;
   }

   export default MyComponent; // Default export

   //or

   export default function MyComponent() {
        return <div>This is my component!</div>;
   }
   ```

   one file can have only one default export. but can have multiple named exports it can be done like this

   ```javascript
    // MyComponent.js
    import React from 'react';
    export function MyComponent() {
         return <div>This is my component!</div>;
    }
    export function AnotherComponent() {
         return <div>This is another component!</div>;
    }
    ```

2. **Import the Component**: At the top of your main file, you need to import the component you want to use. This is usually done using an import statement.

    and you can use as to change the name of component while importing

   ```javascript
   import MyComponent from './MyComponent';
   //or with cahnged names
   import MyComponent as xyz from './MyComponent';
   //or
   import {default as xyz} from './MyComponent';
   ```

   You can also import named exports like this:

   ```javascript
    import { MyComponent, AnotherComponent } from './MyComponent';
    //or with cahnged names
    import { MyComponent as FirstComp, AnotherComponent as SecondComp } from './MyComponent';
    ```

3. **Use the Component in JSX**: Once imported, you can use the component in your JSX code just like you would with any other HTML element.

   ```javascript   
    function App() {
         return (
              <div>
                <h1>Welcome to My App</h1>
                <MyComponent />
              </div>
         );
    }
    ```

```
NOTE : 

Use extenstion .JSX when you used JSX in component Otherwise use .js as extension

```