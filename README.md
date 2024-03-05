## Important Resources:
- [Read more about Higher Order Components](https://legacy.reactjs.org/docs/higher-order-components.html)
- [Read more about Accordion](https://getbootstrap.com/docs/5.0/components/accordion/)
- [Read more about Controlled Components](https://legacy.reactjs.org/docs/forms.html#controlled-components)
- [New Docs Controlled and Uncontrolled Components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
- [Lifting the State Up](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)
- [What is the Problem with Props Drilling?](https://react.dev/learn/passing-data-deeply-with-context#the-problem-with-passing-props)
- [What are the various ways to avoid Props Drilling?](https://blog.logrocket.com/solving-prop-drilling-react-apps/)
  

## HomeWork Questions

#### Q0. How to create an array from an object? 
  - When working with objects, you can use the **Object.entries()** function to create a new array from an object.
  - It returns an array of the given object's own enumerable string-keyed property key-value pairs.
  - Each key-value pair is an array with two elements: the first element is the property key (which is always a string), and the second element is the property value.
  - Example:
```
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
```

#### Q1. What is a Higher-Order Component?
  - It is a **function that takes an existing component as an argument and then enhances that component(adds some extra features to it), and then returns this enhanced component.**
  - Higher Order Components are **Pure Functions**. They never **modify the component** that they take in as input. They just add extra features on top of it/ **enhance the basic component**.
  **| Enhanced Restaurant Component | = | Basic Component with dynamic Restaurant data + Label 'Promoted' on top of Basic Component |** 

#### Q2. What makes the Data Layer of our app?
  - In a very generic way to see our React app, we can say it is c**omposed of 2 Main Layers: Data Layer and UI Layer.**
  - The Data Layer consists of **state, props, local variables and whatever data our app deals with**.
  - It **powers the UI layer** of our app.
    
#### Q3. What makes the UI Layer of our app?
  - The **UI layer consists of JSX which eventually gets rendered onto the Browser DOM.**
  - It, in itself, is a **Static layer**, which is **powered by the Data Layer**.
    
#### Q4. What is Lifting the State Up?
  - Sometimes, we **don't want to give the power of managing the state variable to the child component**. 
  - Instead, we want to keep **the state variable in the paren**t and **pass its value as a prop from parent component to child component**. This is Lifting the State Up, since the **child component is not maintaining its own state**, but is being **controlled by its parent**.
  - Eg: We might want the **state of multiple components to always change together** i.e. be in sync (as in Accordion UI). To do this, **we can remove the individual state variables from them and move/lift it to thier closest common parent component**. Then to **pass the state down to each child component, we use props**. This is known as '**Lifting the State Up**'.

#### Q5. What are Controlled and Uncontrolled Components?
  - **Controlled Component**: The Component that is being **controlled by some other component**. Eg: `<MenuCategory/>` is a controlled component since it gets controlled by its parent `<MenuContainer/>`. It is **not able to maintain its own state**.
  - **UnControlled Component**: The Component that **itself has its single source of truth i.e. 'state' managed by itself** is an Uncontrolled Component. It is **not being controlled by any other component** and is **independently maintaining its own state variable**.

#### Q6. What is Props Drilling?
  - Sometimes, we need to **pass down data from one component to another through mutliple nested levels of components until we get to the component where the data is needed.**
  - This is a **problem** since **we are unnecessarily passing props even to those components which never need them. This is not a good way of managing the Data Layer**.
  - This problem is called '**Props Drilling**'.

#### Q7. What are Context Provider and Context Consumer?
  - **Context Provider:**
      - When we use the React Context concept, we **first create Context as a central/ global place giving some default value to it.**
      - Then we need to **Provide** it to our app, but not with the default value. We want to specify some value in the context.
      - So we need to use a component called **<SomeContext.Provider/>** to provide the value for the context. And we wrap some part of our app/whole app with this component.
      - To this component, we can pass the **'value'** prop. In the value prop, we can pass in the data we want to keep in the context. This data will override the default value.
  - **Context Consumer:**
      - We use this component **<SomeContext.Consumer/>** to subscribe to a context. It lets us read the context value.
      - It is a component that subscribes to the context changes.
      - In this component, we wrap a function. That function takes the current context value and returns a React node.

#### Q8. If you don't pass a value to the provider, does it take the default value?
  - If we don't pass any value to the provider, it does not take the default value.
  - Instead, it simply assigns undefined to the context value and when later we try to use the context value inside some consumer or useContext(), we get a typeError saying the value is undefined.
  - If we totally avoid the Provider component, then the components where useContext() is written will take the default context value
```
const ThemeContext = createContext("Default");
```
```
const User = ()=>{
  const context = useContext(ThemeContext);
  return <h2>User: {context}</h2>
}
```
```
const App = ()=>{
  return (<div>
          <ThemeContext.Provider value = {{context:"User1"}}>
            <User/>  //Child inside Provider will get "User1" 
          <ThemeContext.Provider/>
          //Totally avoiding the Provider component:
          <User/>   //Child outside Provider will get "Default"
        </div>
  )
}
```
