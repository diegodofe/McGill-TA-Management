import React from "react";
import App from "./App";
import { emptyUser, User } from "./classes/User";

interface UserProviderProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const ConfigureApp = () => {
  const [user, setUser] = React.useState<User>(emptyUser);

  const UserContext = React.createContext<UserProviderProps>({ setUser, user: emptyUser });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <App />
    </UserContext.Provider>
  );
};

export default ConfigureApp;
