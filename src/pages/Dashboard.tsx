import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Tab, Tabs } from "react-bootstrap";
import { UserContext } from "../App";
import StudentCourses from "../components/tabs/student/StudentCourses";
import ManageProfessors from "../components/tabs/sysop/ManageProfessors";
import ManageStudents from "../components/tabs/sysop/ManageStudent";
import Wishlist from "../components/tabs/ta/Wishlist";
import { UserTypes } from "../enums/UserTypes";

export function Dashboard() {
  /**
   * Get list of user's profiles/types
   * @TODO Retrieve this information from the actual global user state
   */
  const { user, setUser } = useContext(UserContext);
  const userProfiles: Array<UserTypes> = [UserTypes.Student, UserTypes.Sysop];

  // Set a default profile
  const [currentProfile, setCurrentProfile] = useState<UserTypes>(userProfiles[0]);

  // Map to get list of JSX elements based on profile
  const tabsPerProfile = new Map<UserTypes, Array<JSX.Element>>([
    [UserTypes.Student, [<StudentCourses />, <Wishlist />]],
    [UserTypes.Sysop, [<ManageProfessors />, <ManageStudents />]],
  ]);

  // Set the default array of tabs relative to our default profile
  const [currentTabs, setCurrentTabs] = useState<Array<JSX.Element>>(tabsPerProfile.get(currentProfile)!);

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
          <Navbar.Brand>McGill</Navbar.Brand>
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
          {currentTabs.map((tab, i) => (
            <Tab key={i} eventKey={`${i}`} title={`${currentProfile} tab ${i}`}>
              {tab}
            </Tab>
          ))}
        </Tabs>
      </Container>
    </div>
  );
}

export default Dashboard;
