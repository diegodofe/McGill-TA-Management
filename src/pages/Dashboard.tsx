import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Tab, Tabs } from "react-bootstrap";
import { UserContext } from "../App";
import RateTA from "../components/tabs/student/RateTA";
import ManageStudents from "../components/tabs/sysop/ManageStudent";
import ManageProfessors from "../components/tabs/sysop/ManageProfessors";
import { UserTypes } from "../enums/UserTypes";
import logo from "../assets/images/mcgill_logo.jpg";
import "../style/topbar.css";
import ManageCourses from "../components/tabs/sysop/ManageCourses";
import ManageTAs from "../components/tabs/admin/ManageTAs";

export function Dashboard() {
  const tabsPerProfile = new Map<UserTypes, Array<string>>([
    [UserTypes.Student, ["Rate a TA"]],
    [UserTypes.Admin, ["Manage TAs"]],
    [UserTypes.Sysop, ["Manage Professors", "Manage Students", "Manage Courses"]],
  ]);

  const tabNamesToJSX = new Map<string, JSX.Element>([
    ["Rate a TA", <RateTA />],
    ["Manage TAs", <ManageTAs />],
    ["Manage Professors", <ManageProfessors />],
    ["Manage Students", <ManageStudents />],
    ["Manage Courses", <ManageCourses />],
  ]);

  /**
   * Get list of user's profiles/types
   * @TODO Retrieve this information from the actual global user state
   */
  const { user, setUser } = useContext(UserContext);
  const userProfiles: Array<UserTypes> = [UserTypes.Student, UserTypes.Admin, UserTypes.Sysop];

  // Set a default profile
  const [currentProfile, setCurrentProfile] = useState<UserTypes>(userProfiles[0]);

  // Set the default array of tabs relative to our default profile
  const [currentTabs, setCurrentTabs] = useState<Array<string>>(tabsPerProfile.get(currentProfile)!);

  // On nav bar selection, this function sets the new current profile and associated tabs.
  function handleNavClick(profile: UserTypes): void {
    setCurrentProfile(profile);
    setCurrentTabs(tabsPerProfile.get(profile)!);
  }

  // Render nav dropdown options and nav tabs based on state above
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <img className="logo" src={logo} alt="mcgill-logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Tabs defaultActiveKey="0" transition={false} id="noanim-tab" className="mb-4">
          {currentTabs.map((currentTabName, i) => (
            <Tab key={i} eventKey={i} title={currentTabName}>
              {tabNamesToJSX.get(currentTabName)}
            </Tab>
          ))}
        </Tabs>
      </Container>
    </div>
  );
}

export default Dashboard;
