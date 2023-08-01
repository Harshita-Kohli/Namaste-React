import {useContext} from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext);//using context
    // console.log(resData);
    const { cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        sla,
        avgRating } = resData?.info;
    return (
        <div className="m-2 p-4 w-[350px] rounded-lg border bg-slate-100 hover:shadow-2xl">
            <img
                src={CDN_URL + cloudinaryImageId}
                alt="res-image"
                className="rounded-lg" />
            <h3 className="font-bold py-2 text-xl">{name}</h3>
            <h4 className="py-1">{cuisines.join(", ")}</h4>
            <div className="flex items-center justify-between">
                <h4 className="py-2">{costForTwo}</h4>
                <div>•</div>
                <h4>{sla.deliveryTime} minutes</h4>
                <div>•</div>
                <h4>{avgRating} ⭐</h4>
            </div>
            <h4>{loggedInUser}</h4>
        </div>
    )
}

//Higher-order component:
export const withPromotedLabel = (RestaurantCard) => {
    //the higher-order component returns a component
    return (props) => { 
        //the component is a function that returns jsx
        return ( 
            <div>
                <label className="absolute bg-slate-900 text-white m-2 p-1">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
};
export default RestaurantCard;