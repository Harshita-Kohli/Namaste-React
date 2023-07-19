import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from '../components/Shimmer';
import { RES_LIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //listofRestaurants is a local state variable, local becoz has scope within the body component!
  const [listOfRestaurants, setListOfRestaurants] = useState(null);//creating a super powerful react state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");//state representing the search text of the input field

  console.log("Body Rendered");

  //using useEffect to fetch the data only after initial render of the <Body/> 
  useEffect(() => {
    // console.log("useEffect's side effect called!");
    fetchData();
    return () => {
      console.log("Cleanup function called!!")
    }
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

  const onlineStatus = useOnlineStatus();//using custom hook to get online status of the user out-of-the-box
  console.log(onlineStatus);
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline!! Please check your internet connection!!</h1>
    )
  };

  return listOfRestaurants === null ? (<Shimmer />
  ) : (
    <div className="body bg-slate-50">
      <div className="filter flex justify-end items-center">
        <div className="search m-3 px-2">
          <input
            type="text"
            className="search-box mx-4 p-[5px] border border-stone-950 rounded-md "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }
            }
          />
          <button className="p-2 bg-slate-300 rounded-md hover:shadow-md"
            onClick={() => {
              console.log(searchText)
              //filter logic:
              const filtered = listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }
            }>
            <div className="flex items-center justify-center">
              <span className="px-1">
                <svg className="_1GTCc" viewBox="5 -1 12 25" height="14" width="17" fill="#686b78">
                  <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
                </svg>
              </span>
              <span className="px-2 font-bold">
                Search
              </span>
            </div>
          </button>
        </div>
        <div>
          <button className="filter-btn mr-4 p-2 bg-slate-300 rounded-md hover:shadow-md"
            onClick={() => {  //this is a callback function that runs when we click the button
              //Filter logic:
              const filteredRestaurants = listOfRestaurants.filter(res => res.data.avgRating > 4)
              //update the state:
              setFilteredRestaurants(filteredRestaurants);//thsi updates the state variable and leads to re-rendering of the component!
              console.log(listOfRestaurants);
            }}
          >
            <div className="font-bold">
              Top Rated Restaurants
            </div>
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.data.id}
            key={restaurant.data.id}
            className="link"><RestaurantCard
              resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Body;