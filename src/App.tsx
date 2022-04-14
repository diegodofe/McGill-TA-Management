import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";
import User from "./classes/User";

interface UserProviderProps {
  user: User;
  setUser: Function;
}

export const UserContext = React.createContext<UserProviderProps>({ user: new User({}), setUser: () => {} });

const App = () => {
  const [user, setUser] = React.useState<User>(new User({}));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};
export default App;
