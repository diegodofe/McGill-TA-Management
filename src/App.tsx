import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./components/tabs/sysop/UserManagement";

import Login from "./pages/Login";
import User from "./classes/User";
import Register from "./pages/Register";

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
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/usermanagement" element={<UserManagement />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};
export default App;
