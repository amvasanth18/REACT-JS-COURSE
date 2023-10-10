import apiList from "../utils/MockData";
import RestaurantCard from "./RestaurantCard"
import { useState } from "react";
const Body=()=>{
    const [ListOfRestaurant,setListOfRestaurant]=useState(apiList);
   
    return(
      <div className="body">
          <div className="Filter">
            <button className="Filter-btn" onClick={()=>{
                const filteredList=apiList.filter(res=> res.info.avgRating>4);
                setListOfRestaurant(filteredList);
            }}
            >TopRatedRestaurants</button>
          </div>
          <div className="res-container">
            {ListOfRestaurant.map((restaurant)=>(
              <RestaurantCard key ={restaurant.info.id} resData={restaurant}/>
            ))}
          </div>      
      </div>
    )
}
export default Body;