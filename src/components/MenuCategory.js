// import { useState } from "react";
import ItemList from "./ItemList";
const MenuCategory = (props) => {
    const { data, showItems, setVisibleIndex, visibleIndex, setVisibleIndexNull, currentIndex} = props;
    // const [showItem, setShowItem] = useState(false);
    // console.log(data);
    const onClickHeaderHandler = (e) => {
        // setShowItem(!showItem);//we want to toggle the 'show' state variable
        //if the same particular category is clicked again after getting expanded, it means we need to close it, so set visibleIndex to null again
        if(visibleIndex===currentIndex){
            setVisibleIndexNull();
        }
        
        //Whenever a particular category is clicked for the first time, it leads to updating the parent state variable with the particular index
        // This means only this particular category will be expanded and all others will be collapsed
        else{
            setVisibleIndex();
        }
    }
    //Here we will put an accordion item
    return (
        <div>
            {/**Header: We need to make it clickable*/}
            <div className="w-[900px] p-4 bg-slate-100 border-b-8">
                <div className="flex justify-between items-center cursor-pointer" onClick={onClickHeaderHandler}>
                    <span className="font-bold text-lg text-slate-800 py-2">{data.title} ({data.itemCards.length})</span>
                    <span>{showItems ? "⬆️" : "⬇️"}</span>
                </div>
                {/**Body : We want to expand and collapse the body*/}
                {showItems && <ItemList itemCards={data.itemCards} />}
                
            </div>


        </div>
    )
};
export default MenuCategory;