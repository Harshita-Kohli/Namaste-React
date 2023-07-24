import { createContext } from "react";

const UserContext = createContext({ //creating a context object
    loggedInUser: "Default User"
});
export default UserContext;