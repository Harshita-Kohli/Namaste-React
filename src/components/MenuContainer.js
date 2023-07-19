import MenuItem from "./MenuItem";
const MenuContainer = (props) => {
    const {filteredMenu} = props;
    return (
        <ul className = "flex flex-wrap items-center justify-center" >
            {filteredMenu.map(item => <MenuItem key={item.card.info.id} itemInfo={item.card.info} />)}
        </ul>
    )
}
export default MenuContainer;