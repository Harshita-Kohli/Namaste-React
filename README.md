## Important Resources:
- [Why to write super(props)?](https://overreacted.io/why-do-we-write-super-props/)
- [React Lifecycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [About Class Components](https://legacy.reactjs.org/docs/react-component.html)
- [The GitHub API that we used for UserProfile](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user)
- [Medium Article on React Component Lifecycle](https://www.freecodecamp.org/news/react-component-lifecycle-methods/#:~:text=The%20render()%20lifecycle%20method&text=It%20is%20called%20every%20time,component%20has%20been%20re%2Drendered.&text=The%20render%20method%20displays%20the%20current%20count%20value%20and%20a%20button.)
## Notes: 
- Class Component is nothing but normal JS class that has render() function which returns some piece of JSX

## Homework Questions:
#### 1. Why can't we have  async callback function in useEffect()? 
  - [Read More on Medium](https://medium.com/@achieversittraininga/using-async-await-inside-reacts-useeffect-hook-bedc401be860#:~:text=Because%20the%20useEffect%20hook%20in,invoked%2C%20resulting%20in%20a%20problem.)

  - [Read More on HashNode](https://shubhambhoj.hashnode.dev/useeffect-async)
  - Because an async function implicitly returns a promise. But the useEffect() hook expects its callback function to either return nothing or return a cleanup function.
  - So React's useEffect hook expects its callback function to return a cleanup function which gets executed just before the component unmounts. So if we make tha callback function as async, it causes a bug as cleanup function will never be called.
  - useEffect must not return anything besides a function, which is used for clean-up.
  - It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

```
useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]);  // Or [] if effect doesn't need props or state
```
#### 2. Why can we use async with componentDidMount?  [Read More](https://www.valentinog.com/blog/await-react/)
  - Since componentDidMount() is the best place to make fetch calls, we can make it async.

#### 3. How do you create nested routes using react-router-dom configuration?
  - We can create nested/children routes within other routes using a property called "children".
  - We can give the children while specifying the router configuration in createRouterBrowser().
  - These children will be a list of objects depicting the child routes of the parent route.
  - Eg: Suppose we want to specify children routes for `<AppLayout/>` component, we will do it as follows:
```
    const appRoute = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout/>,
      children: [{  //the "/", "/about" and "/contact" routes are the children routes for the root route "/"
        path: "/",
        element: <Body/>,
        },
        {
        path: "/about",
        element: <About/>,
        },
        {
        path: "/contact",
        element: <Contact/>,
        }
      ]
    }]);
```
  - We are creating children routes on the root route "/". So on `<AppLayout/>`'s route, we have childrren routes to `<Body/>`, `<About/>` and `<Contact/>`.
  - After creating the children routes in appRouter, we need to tweak the JSX of the `<AppLayout/>`.
```
const AppLayout = () =>{
  return (<div className = "app">
            <Header/>
            <Outlet/> //this Outlet component will be replaced by the child of the AppLayout as per the path.
          </div>
        )
}
```
#### 4. What is the use of `<Outlet/>` component? 
  - So if we want to **push the children under the parent route based on the path**, we need a component provided by **'react-router-dom' library** called `<Outlet/>`.
  - The **Outlet just acts as a placeholder(or a tunnel)** which later gets **replaced by the children of the parent route based on the path.**
  - Eg: When we want to push children routes of AppLayout, such that
      - If path = "/" -> push `<Body/>` as a child of AppLayout. ---> So `<Outlet/>` will be replaced by `<Body/>`
      - If path = "/about" -> push `<About/>` as a child of AppLayout.---> So `<Outlet/>` will be replaced by `<About/>`
      - If path = "/contact" -> push `<Contact/>` as a child of AppLayout.---> So `<Outlet/>` will be replaced by `<Contact/>`
   
        
#### 5. Read about createHashRouter and createMemeoryRouter from react-router-dom.

#### 6. What is the order of lifecycle method calls in Class-Based Components?
  - During the execution of a class-based component, we have **5 Lifecycle methods executed in the following order**:
    
    **`constructor()` -> `render()` -> `componentDidMount()` -> `componentDidUpdate()` -> `compononentWillUnmount()`**

#### 7. What is the use of constructor()?
  - **constructor()**: It is the **1st lifecycle method to be executed as soon as a class component loads/renders/gets instantiated.**
  - **Rendering a class component means a new instance of a class is created**. Whenever this new instance is created, the constructor is called.
  - The props passed to the class component are received by the constructor() as an argument.
  - constructor() is the best place to specify the state for the class component. We can specify the initial state value here since constructor is the first thing to be called upon the loading of the class component.

#### 8. What is the use of the render() in class components?
  - **render()**: It is the **2nd lifecycle method** and gets executed after constructor().
  - It renders the class component. By rendering we don't mean actual mounting of the class component in the DOM!!
  - render() **does not mount the component** to the DOM. It just **generates the component's Virtual DOM representation based on the current props and state.**

#### 9. Why do we use componentDidMount?
  - **componentDidMount()**: It is the **3rd lifecycle method** to be executed in the Lifecycle of a class component.
  - It executes after the **render() method**.
  - It is the **best place to make API calls/fetch calls** because it is executed after the class component has been rendered to the DOM.
  - Its very name "componentDidMount" suggests that component has been successfully completely mounted to the DOM.
  - Now in React, we always want to render the skeleton component quickly without waiting for anything. Then once it is rendered, we quickly make an API call in the componentDidMount() which fetches the data and now updates the state with that data.
  - As the state updation triggers re-render of the component, now the component re-renders with the actual data given by the API. This is how componentDidMount() is useful.

#### 10. Why do we use componentDidUpdate()?
  - It is the **4th Lifecycle method** that gets executed when the component gets actually updated in the DOM.
  - If we need to do something after the something has changed/updated in the component, we can write that code in the componentDidUpdate().
  - Eg:
```
componentDidUpdate(prevState, prevProps){
  if(this.state.count!== prevState.count){
      //do something if the count changes...
  }
}
```

#### 11. Why do we use componentWillUnmount? Show with example.
  - **compononentWillUnmount()**: It is the **5th and the last Lifecycle method** that gets executed just before the class component is about to get unmounted from the DOM.
  - It is useful for doing any **clean up like clearing the interval, or timeout** that we might have **set earlier while mounting that component**.
  - In SPA, when we are leaving a page, we **are not literally doing so. We are just refreshing and reloading components in the same single HTML page**.
  - So any **timers or intervals that we have set in the component remain in the browser even after the component gets unmounted from the DOM**.
  - We don't want multiple intervals or timers being run in the browser even after the component has been unmounted from the DOM. So for that, make use of componentWillUnmount().
  - This is very important for building **SCALABLE and PERFORMANT APPS.**
    **"CLEAR THE MESS THAT YOU MADE WHILE MOUNTING THE COMPONENT!!"**
  - Eg: Suppose we set an interval while mounting the component. Now before unmounting, we must clear it:
```
  componentDidMount(){ //every time the component is mounted to the DOM, a new interval is set
    this.interval = setInterval(()=>{
      console.log("Namaste React OP")
    }, 1000); //after every 1 second, prints "Namaste React OP"
  }
  componentWillUnmount(){
    //clear the interval here:
    clearInterval(this.interval);
  }
```
  - This way, if we now **unmount the component from the DOM , the interval is cleared. Then later when we mount it again, a new interval is set from 0. So we just have one interval running in browser that too only when the component is mounted.**
    

#### 12. Why do we use super(props) in constructor?
  - **Class components in React are made by extending the 'React.Component' class exported by the React library**.
  - This means any **class component that we make is a child of that Component parent class.**
  - We know in our **class components, the 1st method to be called is constructor().**
  - In the constructor() of class components, we must write **super(props) as the very first line.**
  - Note: **super() call is a call to the Parent class's constructor ie. call to the Component class's constructor.**
  - This is a **common OOP principle that whenever we call the child constructor, the first thing to do in the child constructor is to initialise the parent class members.**
  - Reason being **child class derives the parent class and it must be using the parent class members**. **It would be wrong to use  those parent class members in child class without even initialising them. This would cause an error.**
  - Similarly **in case of React class components, we know we will be using {this.props}. The 'this' object is actually coming from the parent class 'Component'. So we can't use {this.props} unless the 'this.props' has been initialised in the parent class.**
  
  - So, Recommended way: - **React recommends calling super() with props as the first thing to make sure that this.props has been initialised!!**
```
constructor(props){
  super(props);  //call super(props) first to initialise 'this.props'
  console.log(this.props); //then we can access 'this.props'
}
```
  - What if we don't pass props to super():
```
constructor(props){
  super(); //calling super() without props
  console.log(props); //✅ logs the props correctly since 'props' is the local variable
  console.log(this.props); //undefined, since this.props has not been initialised ie. props have not been attached to the 'this' object 
}
```
  

