import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import MenuHeader from "./MenuHeader";
import MenuContainer from "./MenuContainer";
import ToggleSwitch from "../utils/ToggleSwitch";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [isVegOnly, setIsVegOnly] = useState(false);//initially, we set isVegOnly = false
    const [filteredMenu, setFilteredMenu] = useState([]);

    const { resId } = useParams();

    //make an api call to fetch the restaurant info
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId); //this returns a promise
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
        setFilteredMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    };
    // console.log(resInfo);
    if (resInfo === null) {
        return <Shimmer />
    }
    const menu = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(itemCards);
    // console.log(filteredMenu);

    const toggleHandler = () => {
        if (isVegOnly) {
            setIsVegOnly(false);
            setFilteredMenu(itemCards);
        }
        else {
            setIsVegOnly(true);
            const filtered = itemCards.filter((item) => item.card.info.itemAttribute.vegClassifier === "VEG");
            console.log(filtered);
            setFilteredMenu(filtered);
        }
    }

    return <div className="menu">
        <MenuHeader menu={menu} />
        <h2>Menu ({filteredMenu.length})</h2>
        <ToggleSwitch menu={menu} onChange={toggleHandler} />
        <MenuContainer filteredMenu={filteredMenu} />
    </div>
}
export default RestaurantMenu;