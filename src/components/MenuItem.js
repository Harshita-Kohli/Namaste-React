import { CDN_URL } from "../utils/constants";

const MenuItem = (props) => {
    const { itemInfo } = props;
    // console.log(itemInfo);
    return (
        <li key={itemInfo.id} className="m-2 p-4 w-full border-b-2 bg-slate-100 flex justify-between text-left">
            <div className="item-info w-9/12">
                <h3 className="text-lg py-2 font-semibold text-slate-800">{itemInfo.name} - ₹{itemInfo.price / 100 || itemInfo.defaultPrice / 100}</h3>
                <h4 className="item-description text-sm font-light">{itemInfo.description}</h4>
            </div>
            <div className="p-2 w-3/12">
                <div className="absolute">
                    <button className="px-2 py-1 ml-32 my-auto w-6/12 shadow-md bg-white rounded-md hover:shadow-xl hover:bg-slate-100 hover:border text-slate-800 text-sm font-bold">
                        ADD
                    </button>
                </div>
                {itemInfo.imageId && <img src={CDN_URL + itemInfo.imageId} className="rounded-lg" />}
            </div>
        </li>
    )
}
export default MenuItem;