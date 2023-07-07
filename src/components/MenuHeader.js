const MenuHeader = (props) => {
    const { menu } = props;
    return <div className="menu-header">
        <ul>
            <h1>{menu.name}</h1>
            <h3>{menu.cuisines.join(', ')} - {menu.costForTwoMessage}</h3>
            <h3>{menu.avgRating}⭐</h3>
        </ul>
    </div>

}
export default MenuHeader;