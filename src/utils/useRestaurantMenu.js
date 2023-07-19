import {useEffect, useState} from 'react';
import { MENU_API_URL } from './constants';
//CUSTOM HOOK TO FETCH RESTAURANT MENU
const useRestaurantMenu = (resId) =>{
    //local state variable
    const [resInfo, setResInfo] = useState(null);
    //fetch-data logic
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        // console.log(json);
        setResInfo(json?.data);
        // console.log(resInfo);
    }
    return resInfo;
}
export default useRestaurantMenu;