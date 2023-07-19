import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Shimmer } from "react-shimmer";
// import Grocery from "./components/Grocery";
import useOnlineStatus from "./utils/useOnlineStatus";

const Grocery = lazy(() => import("/src/components/Grocery")); //lazy loading of Grocery

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  // if(onlineStatus === false){
  //   return (
  //     <div className="app">
  //       <h1> Seems like you are offline</h1>
  //     </div>
  //   )
  // }
  return (
    <div className="app">
      <Header />
      <Outlet /> {/**This outlet will be replaced by the actual component that should be rendered based upon the route */}
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [ //we have put the body, about and contact routes as children routes of AppLayout
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);
