import { CDN_LOGO } from "../utils/constants";
import {useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header=()=>{
  const [btnNameReact,setBtnNameReact]=useState("Login");
  console.log("Header Rendered")
    const onlineStatus=useOnlineStatus();
    return(
      <div className="header">
         <div className="res-logo">
            <img src={CDN_LOGO}></img>
         </div>
         <div className="nav-items">
            <ul>
              <li>online status:{onlineStatus?"✅":"🔴" }</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">contact Us</Link></li>
              <li><Link to="/grocery">Grocery</Link></li>
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