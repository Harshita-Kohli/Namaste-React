import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  console.log("Re-rendering the Header!!");
  // console.log(btnName + " after re-render");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
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