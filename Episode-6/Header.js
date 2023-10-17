import { CDN_LOGO } from "../utils/constants";
import { useState } from "react";


const Header=()=>{
  const [btnNameReact,setBtnNameReact]=useState("Login");
  console.log("Header Rendered")
    return(
      <div className="header">
         <div className="res-logo">
            <img src={CDN_LOGO}></img>
         </div>
         <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Conact Us</li>
              <li>Cart</li>
              <button className="login" onClick={()=>{
                 btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")
              }}>
               {btnNameReact}
              </button>
            </ul>
         </div>
      </div>
    )
  }
export default Header;