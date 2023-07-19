import { CDN_URL } from "../utils/constants";

const MenuItem = (props) => {
    const { itemInfo } = props;
    // console.log(itemInfo);
    return (
        <li key={itemInfo.id} className="m-2 p-4 w-[1000px] border bg-slate-100 flex justify-between rounded-lg hover:shadow-2xl">
            <div className="item-info w-[750px]">
                <h3 className="text-2xl py-2 font-bold">{itemInfo.name} - Rs.{itemInfo.price / 100 || itemInfo.defaultPrice / 100}</h3>
                <h4 className="item-description text-md font-light">{itemInfo.description}</h4>
            </div>
            <div className="p-2 w-60" >
                <img src={CDN_URL + itemInfo.imageId} />
            </div>
        </li>
    )
}
export default MenuItem;