## Important Resources:
- [Rules of Hooks](https://legacy.reactjs.org/docs/hooks-rules.html)
- [React Router DOM](https://reactrouter.com/en/main/routers/create-browser-router)

## Notes: 
- Step1: We imported the createBrowserRouter from 'react-router-dom'
- Step2: We call createBrowserRouter(), it takes some configuration in it. 
       This configuration is a list/array of objects
       Each object defines a different path and what to render on that path
- Step3: After creating the router configuration, we need to provide it to render the things as per the path
       So we import RouterProvider from react-router-dom package
- Step4: We do root.render(<RouterProvider/>) instead of root.render(<AppLayout/>) directly  