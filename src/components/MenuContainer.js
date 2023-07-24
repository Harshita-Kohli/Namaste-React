// import MenuItem from "./MenuItem";
import { useState } from "react";
import MenuCategory from "./MenuCategory";
const MenuContainer = (props) => {
    const { filteredMenu, categories } = props;
    
    //this state variable keeps track of whoch index needs to be expanded.
    //If visibleIndex = 0, it means the first category is to be expanded
    const [visibleIndex, setVisibleIndex] = useState(null);
    // console.log(categories);
    return (
        <div className="text-center">
            {/*filteredMenu.map(item => <MenuItem key={item.card.info.id} itemInfo={item.card.info} />)*/}
            {categories.map((category, index) =>
                <MenuCategory
                    data={category.card.card}
                    key={category.card.card.title}
                    showItems={index === visibleIndex ? true : false}
                    setVisibleIndex={() => {
                        setVisibleIndex(index);
                    }
                    }
                    setVisibleIndexNull = {()=>{setVisibleIndex(null);}}
                    visibleIndex={visibleIndex}
                    currentIndex = {index}
                />)}
        </div>
    )
}
export default MenuContainer;