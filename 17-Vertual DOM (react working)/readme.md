Myths
1. Vertual DOM is not used in react now.
2. In vanilla JS, When we update the DOM, the whole DOM is re-rendered. and react helps o avoid that by only re rendering a perticulor component.

### <Span style="color:orange">Why we need react?</Span>

- Repaint = coloring the pixels on the screen.
- Reflow = find the position of the elements and the size of them. (where the searchbar will come and how much space. it will take, etc)

So when we update the DOM, the browser has to do both Repaint and Reflow. and both of them are **expensive operations**.

Now if we write
```js
document.body.style.backgroundColor = "red";
document.body.style.fint-size = "20px";
document.body.style.margin = "10px";
```

so here first browser has to do repaint + reflow for background color change, then again repaint + reflow for font-size change and again repaint + reflow for margin change.

But what if we made all the changes together and then told the browser to do repaint + reflow only once.

This is done using react. JS can also do this using fragment, but react makes it easier.

React make a bundle of all the changes and then apply them at once. so that browser has to do repaint + reflow only once.

### <Span style="color:orange">How we can run all this instruction at once?</Span>

React sends the bundle but at the end js engine has to execute them. and we know that js is single threaded. so it run all this 3 statements one by one. so how can we make it to do all the changes at once?

The browser screen is nothing but an image that is being refreshed at 60fps (frames per second). It's just a video that is being played at 60 frames per second. So every 16.67ms the browser repaints the screen.
In each frame, the browser may:
1. Run JavaScript
2. Calculate layout (reflow)
3. Paint pixels (repaint)

React does not update the DOM immediately when a state change occurs.
Instead, React collects and batches all state changes that happen during the same JavaScript execution cycle.

JavaScript runs in a single thread and executes instructions one by one, but very fast (usually far less than 16.67ms). During this time, React only records updates in memory and does not touch the DOM.

After JavaScript finishes executing, React applies all DOM changes at once (commit phase).

Once the DOM is updated, the browser performs reflow and repaint, usually in the next render frame (~16.67ms), resulting in only one layout and one paint.

### <Span style="color:orange">Vertual DOM ?</Span>

The Virtual DOM is a lightweight copy of the real DOM that React keeps in memory.

When the state or props of a component change, React does not update the real DOM immediately.
Instead, React:

1. Collects (batches) multiple state changes
2. Creates a new Virtual DOM
3. Compares it with the previous Virtual DOM (diffing)
4. Figures out the minimum changes needed
5. Commits those changes to the real DOM in a single update cycle (make fragements of changes and apply them at once)

By batching updates and touching the real DOM only once, React reduces expensive reflows and repaints, making the app faster and smoother.

Also with this it can which changes are not needed to be updated in the real DOM. so it can avoid those changes too.
like

```js
document.body.style.backgroundColor = "red";
document.body.style.backgroundColor = "blue";
```
Here the first change is not needed as it is being overwritten by the second change. so react will only apply the second change to the real DOM.

also this is why in setCount if we do multiple setCount in a single function call, only the last one is applied.
like
```js
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

Here only the last setCount will be applied as all the previous ones are being overwritten by the last one.

because in a singel batch count value is same for all the three setCount calls.

but if we do
```js
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```
Here all the three setCount will be applied as each setCount is using the updated value from the previous one.
because in this case each setCount is using the latest value of count.

### <Span style="color:orange">Why we need key?</Span>

**The Problem**

When React renders a list of components, it needs to understand which component is which between renders.

Consider a list of counters:

```jsx
<Counter />
<Counter />
<Counter />
```


Each Counter has its own state.

Now imagine the list changes:

- One counter is removed
- Or items are reordered
- Or a new counter is inserted in the middle

React re-renders the list and compares the old Virtual DOM with the new Virtual DOM. Without extra information, React matches components by their position (index).

This can cause problems:

- State can move to the wrong component
- Counters may show wrong values
- UI behaves unexpectedly

The Solution: key

A key is a unique identifier given to each item in a list.

When keys are provided:

React matches components using the key, not position React knows exactly which component stayed, moved, or was removed The correct state stays with the correct component

```jsx
<Counter key="1" />
<Counter key="2" />
<Counter key="3" />
```


> Other thing why we need key:

Imaging we are making multiple counter components in a list. Each counter has its own state.

```js
function App() {

  return (
    <div>
      {
        for(let i=0; i<5; i++){
          <Counter/>
        }
      }
    </div>
  );
}
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

now when we click on the first counter's increment button, it call useState to update the count but how react will know which counter's state to update?

because there are multiple counter components. so react uses the key to identify each component uniquely.

so we can say that key is attached with the component's state internally in react.