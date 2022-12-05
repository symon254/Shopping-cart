import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    // check we are within the context
    if (!context) {
        throw Error("use the context inside the AuthContext");
    }

    return context;
};
