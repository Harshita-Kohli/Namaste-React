import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from '../components/Shimmer';
import { RES_LIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  //listofRestaurants is a local state variable, local becoz has scope within the body component!
  const [listOfRestaurants, setListOfRestaurants] = useState([]);//creating a super powerful react state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");//state representing the search text of the input field

  console.log("Body Rendered");

  //using useEffect to fetch the data only after initial render of the <Body/> 
  useEffect(() => {
    // console.log("useEffect's side effect called!");
    fetchData();
  }, []);

  const fetchData = async () => {
    //await for the data to come from the swiggy API...but enable CORS in your browser
    const data = await fetch(RES_LIST_URL);
    //convert the stream of data to json
    const jsonData = await data.json();//await for the promise to be resolved

    //optional chaining in JS '?.'
    setListOfRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  //Conditional Rendering:
  //till the time the restaurants are not loaded, we will show the Shimmer UI cards:
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (<Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }
            }
          />
          <button onClick={() => {
            console.log(searchText)
            //filter logic:
            const filtered = listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }
          }>
            Search
          </button>
        </div>

        <button className="filter-btn"
          onClick={() => {  //this is a callback function that runs when we click the button
            //Filter logic:
            const filteredRestaurants = listOfRestaurants.filter(res => res.data.avgRating > 4)
            //update the state:
            setFilteredRestaurants(filteredRestaurants);//thsi updates the state variable and leads to re-rendering of the component!
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link to = {"/restaurants/"+restaurant.data.id} key={restaurant.data.id} className = "link"><RestaurantCard 
            resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Body;