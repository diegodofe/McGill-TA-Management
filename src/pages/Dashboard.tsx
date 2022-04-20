import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Tab, Tabs } from "react-bootstrap";
import { UserContext } from "../App";
import RateTA from "../components/tabs/student/RateTA";
import ManageProfessors from "../components/tabs/sysop/ManageProfessors";
import ManageStudents from "../components/tabs/sysop/ManageStudent";
import ManageTAs from "../components/tabs/sysop/ManageTAs";
import { UserTypes } from "../enums/UserTypes";
import logo from "../assets/images/mcgill_logo.jpg";
import logout from "../assets/images/126467.png";
import "../style/subTopbar.css";
import ManageCourses from "../components/tabs/sysop/ManageCourses";
import TAAdministration from "../components/tabs/admin/TAAdministration";
import ViewAllTAs from "../components/tabs/admin/ViewAllTAs";
import ProfessorCourses from "../components/tabs/professor/ProfessorCourses";
import ManageTAAdmins from "../components/tabs/sysop/ManageTAAdmins";
import TACourses from "../components/tabs/ta/TACourses";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const tabsPerProfile = new Map<UserTypes, Array<string>>([
    [UserTypes.Student, ["Rate a TA"]],
    [UserTypes.Professor, ["Professor Courses"]],
    [UserTypes.TA, ["TA Courses"]],
    [UserTypes.Admin, ["TA Administration", "View All TAs"]],
    [UserTypes.Sysop, ["Professors", "Students", "Courses", "TA Admins"]],
  ]);

  const tabNamesToJSX = new Map<string, JSX.Element>([
    ["Rate a TA", <RateTA />],
    ["TA Administration", <TAAdministration />],
    ["View All TAs", <ViewAllTAs />],
    ["Professor Courses", <ProfessorCourses />],
    ["TA Courses", <TACourses />],
    ["Professors", <ManageProfessors />],
    ["Students", <ManageStudents />],
    ["Courses", <ManageCourses />],
    ["Manage TAs", <ManageTAs />],
    ["TA Admins", <ManageTAAdmins />],
  ]);

  const navigate = useNavigate();
  /**
   * Get list of user's profiles/types
   * @TODO Retrieve this information from the actual global user state
   */
  const { user, setUser } = useContext(UserContext);
  const userProfiles: Array<UserTypes> = [UserTypes.Student, UserTypes.Professor, UserTypes.TA, UserTypes.Admin, UserTypes.Sysop];

  // Set a default profile
  const [currentProfile, setCurrentProfile] = useState<UserTypes>(userProfiles[0]);

  // Set the default array of tabs relative to our default profile
  const [currentTabs, setCurrentTabs] = useState<Array<string>>(tabsPerProfile.get(currentProfile)!);

  // On nav bar selection, this function sets the new current profile and associated tabs.
  function handleNavClick(profile: UserTypes): void {
    setCurrentProfile(profile);
    setCurrentTabs(tabsPerProfile.get(profile)!);
  }

  function handleLogout(): void {
    console.log("Logging out!");
    navigate("/logout");
  }

  // Render nav dropdown options and nav tabs based on state above
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <img className="logo" src={logo} alt="mcgill-logo" />
          <Nav className="me-auto">
            <NavDropdown title={currentProfile} id="basic-nav-dropdown">
              {userProfiles.map((profile) => (
                <NavDropdown.Item
                  key={profile.toString()}
                  onClick={() => {
                    handleNavClick(profile);
                  }}
                >
                  {profile}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <button onClick={() => handleLogout()}>
            <img className="logout" src={logout} alt="logout" />
          </button>
        </Container>
      </Navbar>
      <Container>
        <Tabs defaultActiveKey="0" transition={false} id="noanim-tab" className="sub">
          {currentTabs.map((currentTabName, i) => (
            <Tab className="sub" key={i} eventKey={i} title={currentTabName}>
              {tabNamesToJSX.get(currentTabName)}
            </Tab>
          ))}
        </Tabs>
      </Container>
    </div>
  );
}

export default Dashboard;
