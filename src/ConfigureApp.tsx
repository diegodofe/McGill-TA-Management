import React from "react";
import App from "./components/QueryExample";
import { initialState } from "./reducers/userReducer";
import { UserType } from "./types/userType";


interface UserProviderProps {
    user: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>
}

const ConfigureApp = () => {

    const [user, setUser] = React.useState<UserType>(initialState);
    const UserContext = React.createContext<UserProviderProps>({ setUser, user });

    // const {user, setUser} = useContext(UserContext);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <App />
        </UserContext.Provider>
    );
}

export default ConfigureApp;