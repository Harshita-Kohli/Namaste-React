import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  // console.log("Re-rendering the Header!!");
  // console.log(btnName + " after re-render");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-red-700 text-stone-50 font-bold shadow-lg sticky top-0 relative">
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
          <Link to="/" className="link">
            <li className="m-4 px-4 text-lg hover:bg-red-900  p-2 rounded-md">
              Home
            </li>
          </Link>
          <Link to="/about" className="link">
            <li className="m-4 px-4 text-lg hover:bg-red-900 p-2 rounded-md">
              About Us
            </li>
          </Link>
          <Link to="/contact" className="link">
            <li className="m-4 px-4 text-lg hover:bg-red-900 p-2 rounded-md">
              Contact Us
            </li>
          </Link>
          <Link to="/grocery" className="link">
            <li className="m-4 px-4 text-lg hover:bg-red-900 p-2 rounded-md">
              Grocery Store
            </li>
          </Link>
          <li className="m-4 px-4 text-lg hover:bg-red-900 p-2 rounded-md">Cart</li>
          <button
            className="p-2 rounded-md bg-red-900 hover:shadow-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");//if login-> logout, otherwise keep login
              // console.log(btnName + " from onCLick");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}
export default Header;