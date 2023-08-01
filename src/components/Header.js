import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  const [theme, setTheme] = useState("dark");
  const { loggedInUser } = useContext(UserContext);//using the 'UserContext' context


  // console.log("Re-rendering the Header!!");
  // console.log(btnName + " after re-render");
  const OnModeClickHandler = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }
  const onlineStatus = useOnlineStatus();
  //READING THE STORE:
  //----------
  //Subscribing the store using Selector
  const cartItems = useSelector((store) => store.cart.items);//we tell the useSelector() hook what exactly we want to subscribe
  console.log(cartItems);
  // -------
  return (
    <div className="flex justify-between text-stone-50 font-bold shadow-lg z-10 sticky top-0 relative bg-red-600 md:bg-red-700 dark:bg-slate-900">
      <div className="logo-container">
        <Link to="/">
          <img className="logo w-40" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items flex ">
        <ul className="flex m-4 p-4 items-center">
          <li className="m-4 px-4 text-lg">
            Online Status: {onlineStatus ? "🟢" : "😡"}
          </li>
          <li className="m-4 px-4 text-lg hover:cursor-pointer hover:bg-red-900 p-2 rounded-md"
            onClick={OnModeClickHandler}>Mode</li>
          <Link to="/">
            <li className="m-4 px-4 text-lg hover:bg-red-900  p-2 rounded-md">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="m-4 px-4 text-lg hover:bg-red-900 p-2 rounded-md">
              About Us
            </li>
          </Link>
          <Link to="/contact">
            <li className="m-4 px-4 text-lg hover:bg-red-900 p-2 rounded-md">
              Contact Us
            </li>
          </Link>
          <Link to="/grocery">
            <li className="m-4 px-4 text-lg hover:bg-red-900 p-2 rounded-md">
              Grocery Store
            </li>
          </Link>
          <Link to="/cart">
            <li className="m-4 px-4 text-lg hover:bg-red-900 p-2 rounded-md">Cart - {cartItems.length}</li>
          </Link>
          <button
            className="p-2 rounded-md bg-red-900 hover:shadow-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");//if login-> logout, otherwise keep login
              // console.log(btnName + " from onCLick");
            }}
          >
            {btnName}
          </button>
          <li className="m-2 px-2 text-lg">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}
export default Header;