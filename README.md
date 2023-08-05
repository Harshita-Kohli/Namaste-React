## Important Resources:
- [online event listener on Window Object](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event)
- [Creating a Fallback Page with Custom Service Workers](https://web.dev/offline-fallback-page/)
- [Read about Linters](https://iq.js.org/questions/react/what-are-the-popular-react-specific-linters)
- [Read about ESLint from npm](https://www.npmjs.com/package/eslint-plugin-react)
- [Code Splitting Old React docs](https://legacy.reactjs.org/docs/code-splitting.html)
- [Lazy Loading](https://react.dev/reference/react/lazy)
- [Dynamic Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)

## HomeWork Questions:
#### 1. When and why do we need lazy()?
- We need lazy() method when we wish to not load everything into the browser in the beginning, but loading when required.
- It means we don't want to load all the components at the same time in the browser. Instead, we want that some component/feature should be loaded only on-demand ie when we actually visit it by clicking its link.
- This helps in splitting/chunking the code into 'logical bundles or chunks'. And this makes our app quite optimised since the loading the bundle size of the app is reduced.
- The lazy() function takes a callback function as a parameter, which calls the dynamic import `import()`.
- The import() takes the path of the component that we want to lazy load.
- Eg: As per the lazy load method, when we load our app initially, it won't load the code for the Grocery app within the Swiggy app. Instead, when we actually visit the Grocery link in the web page, then the code for it is loaded!
```
import {lazy} from "react"; // We need to import 'lazy' from 'react' package
const Grocery = lazy(()=>{import("/src/components/Grocery")});
```

#### 2. What is suspense?
- So when we are lazy loading a particular feature, it gets loaded on-demand.(The code for that component was not loaded initially)
- When we clicked it, React immmediately tried to render it without waiting, but to load that component into the browser took some time.
- During this time span since the component was not present in the browser, React simply Suspended its Rendering as it could not wait for that much time to allow the bundle to load completely into the browser. This middle time caused the error.
- TO resolve this error, we need to provide something to be rendered in the mean-time when the actual component is being loaded. So we need to give some fallback page to be rendered by React for that fraction of time, instead of Suspending the render.
