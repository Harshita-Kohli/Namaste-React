import { CDN_URL } from "../utils/constants";

const MenuItem = (props) => {
    const { itemInfo } = props;
    // console.log(itemInfo);
    return (
        <li key={itemInfo.id} className="menu-item">
            <div className="item-info">
                <h3>{itemInfo.name} - Rs.{itemInfo.price / 100 || itemInfo.defaultPrice / 100}</h3>
                <h4 className="item-description">{itemInfo.description}</h4>
            </div>
            <img src={CDN_URL + itemInfo.imageId} className="res-image" />
        </li>
    )
}
export default MenuItem;