import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";


export const useAuth = () => {
    //Call the auth context

    return useContext(AuthContext);
}   
