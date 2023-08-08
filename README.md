## Important Resources:
- [Online event listener on Window Object](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event)
- [Creating a Fallback Page with Custom Service Workers](https://web.dev/offline-fallback-page/)
- [Read about Linters](https://iq.js.org/questions/react/what-are-the-popular-react-specific-linters)
- [Read about ESLint from npm](https://www.npmjs.com/package/eslint-plugin-react)
- [Code Splitting Old React docs](https://legacy.reactjs.org/docs/code-splitting.html)
- [Lazy Loading](https://react.dev/reference/react/lazy)
- [Dynamic Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)

## HomeWork Questions:
#### 1. When and why do we need lazy()?
- We need **lazy() method** when we **wish to not load everything into the browser in the beginning, but loading when required.**
- It means **we don't want to load all the components at the same time in the browser**. Instead, we want that some component/feature should be loaded only on-demand ie when we actually visit it by clicking its link.
- Allows the **developer break down an application into chunks (modules) per route** and **loads only the module(s) required for the route being visited. Its key principle being: "Load only what you need when you need it".**
- This helps in **splitting/chunking the code into 'logical bundles or chunks'**. And this makes our app quite optimised since the bundle size of the app is reduced.
- The lazy() function takes a **callback function as a parameter**, which calls the dynamic import `import()`.
- The **import() takes the path of the component that we want to lazy load as a parameter**.
- Eg: As per the lazy load method, when we load our app initially, it won't load the code for the Grocery app within the Swiggy app. Instead, when we actually visit the Grocery link in the web page, then the code for it is loaded!
```
import {lazy} from "react"; // We need to import 'lazy' from 'react' package
const Grocery = lazy(()=>{import("/src/components/Grocery")});
```

#### 2. What is suspense? [Read More](https://react.dev/reference/react/Suspense)
##### Problem during Lazy Loading:
- So when we are lazy loading a particular feature, it gets loaded **on-demand**.(The code for that component was not loaded initially)
- When we click it, React immmediately tries to render it without waiting, but to load that component into the browser takes some time.
- During this **time span since the component was not present in the browser, React simply Suspended its Rendering** as it could not wait for that much time to allow the bundle to load completely into the browser. This **intermediate time caused an error**.
##### Solution given by Suspense:
- To **resolve this error**, we need to provide **something to be rendered in the mean-time when the actual component is being loaded**. So we need to give some **fallback page** to be rendered by React for that fraction of time, instead of Suspending the render.
- This can be done by using `<Suspense>`. `<Suspense>` **lets you display a fallback until its children have finished loading.**
- Here, we wrapped Grocery component inside `<Suspense>`, and gave a fallback of "Loading..." string.
- Eg:
```
<Suspense fallback = {Loading...}>
  <Grocery/>
</Suspense>
```

#### 3. Why did we get this error: "A component suspended while responding to synchronous input."? How does Suspense fix this?
- This error occurs because **React suspended the rendering of the component** since its code was not present in the browser at the time of rendering.
- React waited for none and immediately tried to render the component but could not find its code and therefore, could not render it.
- This is **resolved by `<Suspense>` component given by react package.**
- We can **wrap the lazy loaded component into it** and **pass a fallback prop**. This **fallback prop will tell React what to render temporarily in the mean time when the lazy loaded component is being loaded.**
- We pass any **JSX code or any Shimmer component** as a value in the **fallback prop to be rendered as the fallback screen on the UI**. This way Suspense helps resolve the error, and it shows the fallback screen on the UI for a few seconds.

#### 4. Advantages and Disadvantages of using Lazy Loading Method of Code Splitting?

##### Advantages of Lazy Loading and Code Splitting:
  1. **Makes App lightwieght and very performant:** Since we only load the required modules into the browser as and when required, we make our app quite optimised and performant by introducing Lazy Loading. No unnecessary code is loaded into the browser thus the initial loading time of the app is really less.
  2. **Prevents Bloating of the App:** Bloating means increasing the Bundle Size of the app. Since we break the app into smaller chunks/bundles, we don't have any large, bulky bundles of our app that can make it slow and bloated.
  3. **Single Responsibility Principle:** Code Splitting brings SRP since every bundle/chunk is concerned wiht one major responsiblity/feeature. Eg: 'Flights.js' Bundle is a small app within the MMT app that is holds all the code related to the Flights.
     'Homestays.js' - this bundle has all the code related to Homestays etc. This way each bundle is a logical separation of features.
  4. **Helpful in making Scalable and Performant App**
     
##### Disadvantages of Lazy Loading and Code Splitting:
  1. **Time Consumed in Network Calls:** So since we load the lazy loaded components only when they are actually required, we need to make Network calls to fetch that component later. Lazy loaded routes need to perform network requests to fetch JS chunks and this takes time!
  2. **Complicates debugging**: If there are any errors such as an **undefined method** in a lazy loaded component, they will only appear in the console when the faulty chunk is loaded into the browser. This makes debugging a bit more complicated.
  3. **Increased complexity in development and testing processes**: While developing the app, we need to find the sweet-spot between **'No bundling at all'** and **'Over Bundling'**.
    - **'No Bundling at all'** **leaves us with 1000s of JS files** to be loaded into the browser(a great work for browser).
    - **'Over Bundling'** leaves us with a **single large bulky file** having all the 1000s of files in it.
  So while developing the app, we need to decide wisely how many and what components should actually be bundled together in a single bundle and Lazy Loaded, and which ones should be loaded normally. 

#### 5. What is Single Responsibility Principle?
- **Single Responsibility Principle(SRP)** is a Computer Programming Principle where each entity should have just one single responsibility. This entity can be a class or a function or any module.
- In our apps, we should have each entity/ component concerned with its own single responsibility. Eg: `<RestaurantCard/>` componeont should be just concerned with rendering the JSX for the Restaurant card. It should not be concerned about fetching those restaurant details from an API.
  
#### 6. What is Modularity of Code and how does it help?
- Modularity means **breaking our code into different small modules that are related to each other.**
- Breaking the code into smaller pieces makes it more **Reusable, Maintainable and more Testable**.
##### How more Reusable?
  - In a Modular code, we can easily **reuse the modules anytime, anywhere we want**. This is because **those individual modules are concerned with a single responsibility and we can use them as utilities in multiple places instead of writing the smae code again and again.**
  - Eg: The `<Shimmer/>` component is one single module in our app. We can reuse it anywhere we want to create loading effect in the UI.
  - **Thus Modularity makes our code Reusable!**
##### How more testable?
  - If we **encounter any bug in a particular functionality of our Modular code**, we have **a localised bug** i.e. we can easily figure out that the **bug arises from which module**. Now we can simply **test that component/module and resolve the bug**. Otherwise, we would have to **find the bug in that one single big module of the app, which would be very difficult. Thus Modularity makes our code more Testable!**
      
#### 7. What are Custom Hooks? How to identify their need?
- We know **React Hooks are utility functions provided by React developers**. They are **simply JS functions exported by the React library**, which we can reuse any number of times in our app.
- Similarly, we can **write our own Custom Hooks in our code.**
- **TO IDENTIFY THEIR NEED:**
  - To create a Custom Hook is not **mandatory, but a good practice**!
  - Whenever we find that **a single component is dealing with more than 1 responsibility, we must think of bringing SRP into it by abstracting some "utility functionality" outside it.**
  - Suppose one component `<Body/>` is responsible for **fetching data from an API** as well as **rendering that data using JSX**. We must think of keeping only 1 aim for this component.
  - So we can create a **custom hook that actually fetches data from an API endpoint and returns that data**.
  - Now all we need to do in the **Body component is to call that Custom Hook with the endpoint and simply use the data it returns**.
  - The Body is **no longer concerned about how the data is fetched from the API**. That **fetching logic is now abstracted out** of the Body component.
- Thus Custom Hooks act as **Utility functions that abstract out the extra responsibility from the component.** And **they can now be re-used anywhere in our app, any number of times.**
  
#### 8. How to write a custom hook?
- Since **Custom Hook is a utility function**, we should think of placing it into the **'utils' folder**.
- We should **maintain separate file for separate hook and name the file exactly same as the hook's name.**
- **Custom Hook's name should always begin with 'use'**, for example, 'useFetch'. This is a good convention and tells React that it is not a simple JS function but a hook.
- Always begin with writing the **Contract of the custom hook** i.e. what it takes as **input and what it returns as output**.
- This is the Contract for useRestaurantMenu hook. **It takes resId as input and returns corresponding resInfo as output.**
- Eg: resId(I/P) ------> | useRestaurantMenu(Hook) | -----------------> resInfo(O/P)
- Once the contract is clear, we can write the actual logic inside the Custom hook.
```
const useRestaurantMenu = (resId) => {

  //fetching-data logic
  '
  '
  return resInfo;
}
export default useRestaurantMenu;
```

#### 10. What is meant by 'Linting'? [Read about ESLint from npm](https://www.npmjs.com/package/eslint-plugin-react)
- **Linting is a process of running your code** through a **tool to analyse for potential errors. It throws an error if you don't follow the conventions set by the linter.**
- **ESLint is a popular JS linter** that checks the **JS code for best practices, with rules checking** :
    - Keys in Iterators
    - Complete set of prop types
    - Naming Conventions
    - Imported something but not used it
      
#### 11. What is meant by 'Bundling the app'?
- It means it takes all **our files and bundles them together based on some logical separation.**
- We create muliple **logical bundles or chunks in our app**.
- So, it is the **splitting of code into various bundles** or components which can then be loaded on-demand or in parallel.
- **Bundling/Chunking/ Code Splitting/ Dynamic Bundling/On-Demand Loading** etc are all the same thing.
- These help in **optimising our apps when they become large-scale**. In **large-scale app, we divide the code into bundles and load these bundles of relatively small size.**
  
