import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [] //items is an empty array initially  
    },
    reducers: { //an object that will have different reducer functions mapped to actions
        //state is the state object inside intialState
        addItem: (state, action) => { //this reducer function will modify the state using action
            //mutating the state here:
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            // const index = state.items.indexOf(action.payload);
            state.items.pop();
        },
        //initialState = {items:["Pizza"]}
        clearCart: (state) => {
            //RTK says: Either MUTATE THE EXISTING STATE or RETURN A NEW STATE OBJECT
            console.log(current(state));
            // state = [];
            // state.items.length = 0;//converts the original state = {items: ["Pizza"]} -> into state = { items:[] }
            // OR:
            return {items:[]}; //this new object {items:[]} will replace the originalState = {items : ["Pizza"] }
            console.log(state);
        }
    }
});
console.log(cartSlice);
export const { addItem, removeItem, clearCart } = cartSlice.actions;//export actions 
export default cartSlice.reducer;//export reducer from the cartSlice