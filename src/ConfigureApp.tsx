import React from "react";
import App from "./components/QueryExample";
import User from "./classes/User";

interface UserProviderProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const ConfigureApp = () => {
  const [user, setUser] = React.useState<User>(new User({}));
  const UserContext = React.createContext<UserProviderProps>({ setUser, user: new User({}) });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <App />
    </UserContext.Provider>
  );
};

export default ConfigureApp;
