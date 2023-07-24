## Important Resources:
- [Rules of Hooks](https://legacy.reactjs.org/docs/hooks-rules.html)
- [React Router DOM](https://reactrouter.com/en/main/routers/create-browser-router)

# Homework Questions

#### 1. What would happen if we do console.log(useState())?
- We would get an **array of 2 elements in the console:  [undefined, ƒ].**
- The first element being the state variable which is **undefined** since we didn't give any default value for it while calling the useState() hook.
- The second one being the **state-updating function f().**
       
#### 2. How will useEffect() behave if we don't add a dependency array?
- When the second parameter of useEffect() i.e. the dependency array is missing, it gets called upon after every component-render.
- Here are the different cases of useEffect():
  
 | **No dependency Array**                            	| **Empty Dependency Array([ ])**                                            	| **Dependency Array having something [.,.,. ]**                                                	|
|----------------------------------------------------	|---------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------	|
| useEffect() shows its default behavior             	| useEffect's behaviour is changed by the dependency array                  	| useEffect's behaviour is changed by the dependency array                                     	|
| It gets called after every render of the component 	| useEffect gets called only once after the initial render of the component 	| useEffect gets called after initial render + every time any of the dependencies get changed. 	|

#### 3. What is SPA?
- SPA stands for **Single Page Application.**
- It is such an application that **has a single HTML page being rendered to the DOM.**
- It has a single page being rendered, and all the new pages that we see are just **"Components interchanging themselves".**
- If we go on **a new route**, **no new HTML page is loaded** into the browser. We just **change/refresh the components in the same single HTML page.**
- In an SPA, the **browser does not need to make external calls to fetch the different pages**.
- SPAs are **very fast and dynamically-loaded** since **no need to make network calls**.
  
#### 4. What is the difference between Client-Side Routing and Server-Side Routing?
| **Server-Side Routing**                                                                                                                            	| **Client-Side Routing**                                                                                                                                                     	|
|----------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| When we click an anchor tag, **it reloads the entire app, sends a network call to that page and fetches the HTML and renders it on the webpage.**  	| When we click some link/anchor tag, **no network call is made. We just load the required component in that place where needed in the DOM**. **The entire webpage is not reloaded**. 	|
| This was how the websites worked traditionally.                                                                                                    	| Here, all the **components are already loaded into the browser.** So there is no need to make network calls to the server to fetch the pages.                                   	|
| Makes our **app slow** because behind the scenes, there are a **lot of network calls being made and every time, the entire app gets reloaded.**            	| Makes our **app fast** because there is **no re-loading of the entire app**. [**React achieves Client-Side Routing using React-Router library**]                                        	|

#### 5. Best practices of useState() hook?
- Never use it outside the body of the component. It does not make any sense, since useState() is used to make local state variables inside the functional components.
- Always call useState() at the very beginning of the component. So the first thing to do in a component is to create the state variables.
- Never call useState() inside an if block/loop/nested function. Create state variables at the top-level of the component. This ensures that the hook is always called in the same order each time the component renders.

#### 6. What are the steps to create routes in a React app?
- Step1: We imported the **createBrowserRouter** from **'react-router-dom'**
- Step2: We call **createBrowserRouter()**, it takes some configuration in it. 
       This configuration is a list/array of objects
       Each object defines a different path and what to render on that path
- Step3: After creating the router configuration, we need to provide it to render the things as per the path
       So we import **RouterProvider** from react-router-dom package
- Step4: We do **`root.render(<RouterProvider route = {ourRouteConfiguration}/>)`** instead of root.render(<AppLayout/>) directly
```
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
const appRouter = createBrowserRouter([
       {
              path:"/",
              element:<AppLayout/>,
              errorElement:<Error/>
       },
       {
              path:"/about",
              element:<About/>,
              errorElement:<Error/>
       }
]);
'
'
'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
```

#### 7. How to handle route errors in React app?
- Suppose we try to go ona wrong route, which has not been defined. Such a case must be handled gracefully.
- React-Router-DOM itself handles the error somewhat but not in a gracefull and fancy way.
- So we are provided with the **useRouteError() hook**.
- It returns the **error object** from which we can access the various details of the error and then we can display some graceful UI page with the error details.


#### 8. What is the use case of the Link component?
- **`<Link></Link>` component** is a superpower given to us by 'react-router-dom'.
- When we wrap something in it, eg: **`<Link>About Us</Link>`**, if About Us is clicked, **the page won't reload. Instead, the `<About/>` Component will be loaded in the DOM.**
- It helps in avoiding **full page reload** and **just refreshing the components that are required.**
- **<Link> is a wrapper over anchor tag**. It tells the **router-dom not to reload the entire page when that path is visited.**
- If we see in the Elements tab, we won't see <Link/>, we will see `<a></a>` tag. **This proves that behind the scenes <Link/> uses anchor tag.**
- It makes our React App really **fast and performant.**
