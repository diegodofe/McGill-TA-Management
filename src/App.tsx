import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

<<<<<<< HEAD
// Components
import LoginForm from "./components/LoginForm";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
=======
import Login from "./pages/Login";
import { initialState } from "./reducers/userReducer";
import { UserType } from "./types/userType";
>>>>>>> main

interface UserProviderProps {
  user: UserType;
  setUser: any;
}

<<<<<<< HEAD
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUsername(details.username);
    } else if (details.username !== "" || details.password !== "") {
      console.log("Invalid username or password.");
      setError("Invalid username or password.");
    }
  }
=======
export const UserContext = React.createContext<UserProviderProps | null>(null);
>>>>>>> main

const App = () => {
  const [user, setUser] = React.useState<UserType>(initialState);

  return (
<<<<<<< HEAD
    <div className="App">
      {username !== "" ? (
        // <div className="welcome">
        //   <h2>Welcome</h2>
        //   <button onClick={Logout}>Logout</button>
        // </div>
        <div className="float-container">
          <div className="sidebar-page">
            <Sidebar />
          </div>
          <div className="main-page">
            <Topbar />
          </div>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
=======
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </UserContext.Provider>
>>>>>>> main
  );
};
export default App;
