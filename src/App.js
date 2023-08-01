import React, { lazy, Suspense, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Shimmer } from "react-shimmer";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import {Provider} from 'react-redux';
import appStore from "./redux/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("/src/components/Grocery")); //lazy loading of Grocery

const AppLayout = () => {

  const onlineStatus = useOnlineStatus();
  const [userName, setUserName] = useState();
  // const { themeColor } = useContext(ThemeContext);

  // console.log(useState());
  useEffect(() => {
    //Make an API call with username and password, and we got the authenticated user data:
    const data = {
      name: "Harshita Kohli"
    }
    setUserName(data.name);
  }, []);
  return (
    //we provide our store to the root level of the app
    <Provider store={appStore}> 
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet /> {/**This outlet will be replaced by the actual component that should be rendered based upon the route */}
        </div>
      </UserContext.Provider>
    </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);
