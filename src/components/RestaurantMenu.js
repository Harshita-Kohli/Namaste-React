import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import MenuContainer from "./MenuContainer";
// import ToggleSwitch from "../utils/ToggleSwitch";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);//using custom hook to abstract fetching logic to it
    const [filteredMenu, setFilteredMenu] = useState([]);
    // const [isVegOnly, setIsVegOnly] = useState(false);//initially, we set isVegOnly = false

    console.log(resInfo);
    // console.log(filteredMenu);
    if (resInfo === null) {
        return <Shimmer />
    }

    //Else if resInfo is fetched, then destructure it to get the data from it:
    const menu = resInfo?.cards[0]?.card?.card?.info;
    // console.log(menu)
    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
    // setFilteredMenu()
    // console.log(itemCards);
    // const toggleHandler = () => {
    //     if (isVegOnly) {
    //         setIsVegOnly(false);
    //         setFilteredMenu(itemCards);
    //     }
    //     else {
    //         setIsVegOnly(true);
    //         const filtered = itemCards.filter((item) => item.card.info.itemAttribute.vegClassifier === "VEG");
    //         console.log(filtered);
    //         setFilteredMenu(filtered);
    //     }
    // }

    // if (filteredMenu.length === 0) {
    //     return <div className="menu flex flex-col justify-center items-center">
    //         <MenuHeader menu={menu} />
    //         <h2 className="m-4 p-2 text-2xl text-left">Menu ({itemCards.length})</h2>
    //         <ToggleSwitch
    //             menu={menu}
    //             onChange={toggleHandler} />
    //         <MenuContainer filteredMenu={itemCards} categories = {categories}/>
    //     </div>
    // }

    return <div className="menu flex flex-col justify-center items-center">
        <MenuHeader menu={menu} />
        {/*<h2 className="m-4 p-2 text-2xl text-left">Menu ({menu.length})</h2>
        {/*<ToggleSwitch menu={menu} onChange={toggleHandler} />*/}
        <MenuContainer filteredMenu={filteredMenu} categories = {categories}/>
    </div>
}
export default RestaurantMenu;