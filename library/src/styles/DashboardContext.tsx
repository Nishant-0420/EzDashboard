import { createContext, useState } from "react";
import { AppDashboardInterface } from "../../types/ContextTypes";
import { BrowserRouter, useNavigate } from "react-router-dom";

const DashboardContext = createContext<AppDashboardInterface>({
    user: null,
    setUser: () => { },
});

export const DashboardProvider = ({children}: { children: React.ReactNode }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('currentUser')));
    const [loggedIn, setLoggedIn] = useState(currentUser!==null);

    const logout = () => {
        sessionStorage.removeItem('currentUser');
        setCurrentUser(null);
        setLoggedIn(false);
    }

    const authenticate = () => {
        setLoggedIn(true);
    }

    return (
        <DashboardContext.Provider value={{}}>
            {children}
        </DashboardContext.Provider>
    );
}

export default DashboardContext;
