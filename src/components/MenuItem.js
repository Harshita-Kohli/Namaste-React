import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const MenuItem = (props) => {
    const { itemInfo } = props;
    // console.log(itemInfo);
    const dispatch = useDispatch();

    const handleAddItem = (itemInfo) => {
        //Dispatch an Action when ADD button is clicked
        dispatch(addItem(itemInfo));
    }
    return (
        <li key={itemInfo.card.info.id} className="m-2 p-4 w-full border-b-2 bg-slate-100 flex justify-between text-left">
            <div className="item-info w-9/12">
                <h3 className="text-lg py-2 font-semibold text-slate-800">{itemInfo.card.info.name} - ₹{itemInfo.card.info.price / 100 || itemInfo.card.info.defaultPrice / 100}</h3>
                <h4 className="item-description text-sm font-light">{itemInfo.card.info.description}</h4>
            </div>
            <div className="p-2 w-3/12">
                <div className="absolute">
                    <button className="px-2 py-1 ml-32 my-auto w-6/12 shadow-md bg-white rounded-md hover:shadow-xl hover:bg-slate-100 hover:border text-slate-800 text-sm font-bold"
                        onClick={() => handleAddItem(itemInfo)}>
                        ADD
                    </button>
                </div>
                {itemInfo.card.info.imageId && <img src={CDN_URL + itemInfo.card.info.imageId} className="rounded-lg" />}
            </div>
        </li>
    )
}
export default MenuItem;