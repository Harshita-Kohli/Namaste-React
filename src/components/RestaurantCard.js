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
        <div
            className="res-card"
            style={{ backgroundColor: "#242B2E" }}>
            <img
                src={CDN_URL + cloudinaryImageId}
                alt="res-image"
                className="res-image" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>₹ {costForTwo / 100} for Two</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{avgRating} stars</h4>
        </div>

    )
}
export default RestaurantCard;