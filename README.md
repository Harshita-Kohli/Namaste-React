## React Hooks

## Notes:
- **Simple Normal JS Functions given as utility functions to us by React**
- Written by Facebook Developers inside the **'react' we imported from npm**
- Have some logic in them that brings **superpowers** in our app
- Mostly used hooks are: 
   - **useState()** - used 80% of the times
   - **useEffect()** - used 20% of the times
- Other hooks are also used but have a little less usage as compared to the above 2

## HomeWork Questions
### Q1. Is JSX mandatory for React?
   - **No, JSX is not a requirement for using React**. 
   - Using React without JSX is especially convenient when you **don’t want to set up compilation in your build environment.**
   - Each JSX element is just **syntactic sugar** for calling **React.createElement(component, props, ...children)**.
   - So, anything you can do with JSX can also be done with just plain JavaScript!

### Q2. Is eS6 mandatory for React?

### Q3. How to add comments in JSX?
   - You'll need to use JavaScript comments inside of JSX.
   - You can use regular /* Block Comments */, but they need to be wrapped in curly braces: `{/* A JSX comment */}`

### Q4. React Fragment vs <></> [Read More](https://react.dev/reference/react/Fragment)
   - React Fragments are used to wrap multiple adjacent JSX elements into one single unit without leaving a trace of that wrapping element in the DOM.
   - ```
        <React.Fragment>
           <div>Hi</div>
           <div>Hello</div>
        </React.Fragment>
     ```
   - The empty JSX tag <></> is shorthand for <Fragment></Fragment> in most cases:
     ```
     <>
        <h1>Hi</h1>
        <div>Hello</div>
      <>
     ```
### Q5. What is Virtual DOM? [Read more on VDOM](https://legacy.reactjs.org/docs/faq-internals.html)
   - It is a representation of the actual DOM.
   - It is in the form of a tree of React Elements ie tree of JS objects.
   - Used by React to compute the difference between the previous and the current VDOM to optimally update the actual DOM.
   - It is a programming concept where a virtual representation of the UI is stored in the memory.
     
### Q6. What is Reconciliation in React?  [Read More](https://legacy.reactjs.org/docs/reconciliation.html)
   - It is a process by which React finds the **difference between the old VDOM and the new VDOM** whenever there is some **state** update/change.
   - The process in which **React computes which parts of the tree changed**.

### Q7. What is React Fiber? [Read More](https://github.com/acdlite/react-fiber-architecture)
   - It is the latest core React Algorithm followed by react to do the Reconciliation process.
   - It came with React 16
   - New way of finding diff and updating the dom
   - Its main feature is INCREMENTAL RENDERING(splitting the rendering work into chunks)

### Q8. Why do we need keys in React? [Read More](https://legacy.reactjs.org/docs/reconciliation.html#keys)
   - **Always give a key prop to each child in a list**. Key should be **unique and stable** for every child.
   - Keys uniquely identify list items in React.
   - Helps in DOM manipulations since if there are no keys, all the <Card/>s are treated as same identical.
   - Any new <Card/> added will lead to the entire list being removed and the complete list wiht new <Card/> being re-rendered again.
   - Because does not know which <Card/> was the new one.
   - With 'key' prop, React uniquely identifies each element and only appends the new elements at the specified location

### Q9. Can we use Index as keys? [Read More](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)
   - It is an anti-pattern in React to use index as a key.
   - We can use it but only as a last resort.
   - Mostly the data we get from backend itself has some unique id for each data element, which can be used as the key prop.
   - Sometimes, if there is no unique id for the data elements,then as a last resort, we can use the index of the element as the key
   - Rule: **Not Using Key <<<<<< Using Index as a Key <<<<<<<<<< Using a uniq id as Key**
   - When all of these 3 are met, you may safely use the index as a key:
     1. the list and items are static–they are not computed and do not change;
     2. the items in the list have no ids;
     3. the list is never reordered or filtered.
      

### Q10. What are props in React? 
   - At the end of day they are **normal arguments passed to the React Functional components(which are JS functions at the end of day)**
   - To pass data dynamicaly to a component, we can pass data as props, instead of hard-coding data in that component!
   - ALso lets us reuse the **same component for different items like same card for different restaurant details**!
   - **Passing props to Functional Components === Passing arguments to JS functions**

### Q11. Config-Driven UI? [Read More](https://desicoder.hashnode.dev/config-driven-ui)
   - Every web app has a UI layer and a Data Layer.
   - It is a **System-design concept in which the UI layer is driven by the Data Layer. Th UI is dependent upon data coming form backend**
   - We get the Config ie. data from the backend and based on that we decide what and how to render the UI
   - No need to make totally different apps for different parts of the world! If sale in India, but not in America, then based on the config 'sale', we can render the sale component in India and not in America!
   - Controlling the UI using Data


   
