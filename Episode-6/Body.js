
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
   
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant( json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  };
  console.log("Body rendered")
  return ListOfRestaurant.length===0?(<Shimmer/>):(
    <div className="body">
      <div className="Filter">
        <div className="search">
          <input type="text" className="Search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}></input>
          <button 
          onClick={()=>{
            console.log(searchText);
            const filteredList=ListOfRestaurant.filter((res)=>
            res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(filteredList)
          }}
          
          >Search</button>
        </div>
        <button
          className="Filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          TopRatedRestaurants
        </button>
      </div>
      <div className="res-container">
        {FilteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
