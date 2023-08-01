import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";
import emptyCart from "../images/emptyCart.jpg";
const Cart = () => {
    //Subscribe to the store to read the Cart slice
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        //here, Dispatch action to clear cart
        dispatch(clearCart());
    }
    return (
        <div className="menu flex flex-col justify-center items-center m-4">
            <div className="p-4 m-auto w-6/12 bg-slate-100 shadow-2xl border text-slate-800 flex align-center justify-between">
                <div className="m-2 p-2 font-bold text-center text-2xl">Cart</div>
                <button onClick={handleClearCart} className="m-2 p-2 bg-slate-300 rounded-md hover:shadow-md font-bold">Clear Cart</button>
            </div>
            <div className="w-6/12 m:auto p-4 bg-slate-100 border-b-8">
                {cartItems.length === 0 &&
                    <div className="flex items-center">
                        <img src={emptyCart} className="w-48 m-2 p-2"></img>
                        <h1 className="text-center font-bold ml-4 p-2 text-2xl text-slate-800">Cart is Empty. Add items to the Cart!!</h1>
                    </div>}
                <ItemList itemCards={cartItems} />
            </div>
        </div>
    )
}
export default Cart;