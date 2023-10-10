import { CDN_LOGO } from "../utils/constants";

const Header=()=>{
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
            </ul>
         </div>
      </div>
    )
  }
export default Header;