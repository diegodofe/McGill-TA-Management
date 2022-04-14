import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/sysop/UserManagement";

import Login from "./pages/Login";
import { initialState } from "./reducers/userReducer";
import { UserType } from "./types/userType";

interface UserProviderProps {
  user: UserType;
  setUser: any;
}

export const UserContext = React.createContext<UserProviderProps>({ user: initialState, setUser: () => { } });

const App = () => {
  const [user, setUser] = React.useState<UserType>(initialState);

  return (
    
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usermanagement" element={<UserManagement />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};
export default App;
