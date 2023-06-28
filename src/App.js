import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";

// const cardStyle = {
//   backgroundColor: "#E5D68A"
// }

const AppLayout = () => {
  console.log(<Body/>);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
