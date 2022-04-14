import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";
import { initialState } from "./reducers/userReducer";
import { UserType } from "./types/userType";

interface UserProviderProps {
  user: UserType;
  setUser: any;
}

export const UserContext = React.createContext<UserProviderProps | null>(null);

const App = () => {
  const [user, setUser] = React.useState<UserType>(initialState);

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
