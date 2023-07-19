import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    //add event listeners to window object of browser
    // and return the online status of the user of the app
    const [onlineStatus, setOnlineStatus] = useState(true);

    //We just want to add the event listener to the window object once, so we use useEffect with empty dependency array
    useEffect(() => {
        //if user goes offline, set online status = false
        window.addEventListener("offline", () => {
            console.log("Offline!!");
            setOnlineStatus(false);
        });
        //if user comes online, set online status = true
        window.addEventListener("online", () => {
            console.log("Online!!");
            setOnlineStatus(true);
        });
    }, []);
    //we return a boolean value
    return onlineStatus;
}
export default useOnlineStatus;