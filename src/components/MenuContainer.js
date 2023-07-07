import MenuItem from "./MenuItem";
const MenuContainer = (props) => {
    const {filteredMenu} = props;
    return (
        <ul className="menu-container">
            {filteredMenu.map(item => <MenuItem key={item.card.info.id} itemInfo={item.card.info} />)}
        </ul>
    )
}
export default MenuContainer;