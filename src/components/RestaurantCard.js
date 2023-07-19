import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        deliveryTime,
        avgRating } = resData?.data;
    return (
        <div className="m-2 p-4 w-[350px] rounded-lg border bg-slate-100 hover:shadow-2xl">
            <img
                src={CDN_URL + cloudinaryImageId}
                alt="res-image"
                className="rounded-lg" />
            <h3 className="font-bold py-2 text-xl">{name}</h3>
            <h4 className="py-1">{cuisines.join(", ")}</h4>
            <div className="flex items-center justify-between">
                <h4 className="py-2">₹ {costForTwo / 100} for Two</h4>
                <div>•</div>
                <h4>{deliveryTime} minutes</h4>
                <div>•</div>
                <h4>{avgRating} ⭐</h4>
            </div>
        </div>
    )
}
export default RestaurantCard;