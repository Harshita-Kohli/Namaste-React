const MenuHeader = (props) => {
    const { menu } = props;
    return <div className="flex justify-between w-[900px] bg-slate-100 m-4 p-4 shadow-2xl border text-slate-800">
        <div>
            <h1 className="px-2 my-4 text-2xl font-bold">{menu.name}</h1>
            <h3 className="px-2 my-4 text-xl">{menu.cuisines.join(', ')} - {menu.costForTwoMessage}</h3>
        </div>
        <h3 className="px-2 my-4 text-xl text-green-800 font-bold">{menu.avgRating}⭐</h3>
    </div>

}
export default MenuHeader;