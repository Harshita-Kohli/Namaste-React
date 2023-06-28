import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"; //importing the resList from the utilities folder
import { useState } from "react";


const Body = () => {
  //listofRestaurants is a local state variable, local becoz has scope within the body component!
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);//creating a super powerful react state variable
  
  return (
    <div className="body">
      <button className="filter-btn"
        onClick={() => {  //this is a callback function that runs when we click the button
          //Filter logic:
          const filteredRestaurants = listOfRestaurants.filter(res => res.data.avgRating > 4)
          //update the state:
          setListOfRestaurants(filteredRestaurants);//thsi updates the state variable and leads to re-rendering of the component!
          console.log(listOfRestaurants);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id}
            resData={restaurant} />
        ))}
      </div>
    </div>
  )
}
export default Body;