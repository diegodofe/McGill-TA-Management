import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Tab, Tabs } from "react-bootstrap";
import { UserContext } from "../../App";
import { UserTypes } from "../../enums/UserTypes";
import ProfessorCourses from "../tabs/professor/ProfessorCourses";
import StudentCourses from "../tabs/student/StudentCourses";
import ManageProfessors from "../tabs/sysop/ManageProfessors";
import Wishlist from "../tabs/ta/Wishlist";

export default function Navigation() {
  const { user, setUser } = useContext(UserContext);
  const userProfiles: Array<UserTypes> = [UserTypes.Student, UserTypes.Sysop];

  const [currentProfile, setCurrentProfile] = useState<UserTypes>(userProfiles[0]);

  const tabsPerProfile = new Map<UserTypes, Array<JSX.Element>>([
    [UserTypes.Student, [<StudentCourses />, <Wishlist />]],
    [UserTypes.Sysop, [<ManageProfessors />]],
  ]);

  const [currentTabs, setCurrentTabs] = useState<Array<JSX.Element>>(tabsPerProfile.get(currentProfile)!);

  function handleNavClick(profile: UserTypes): void {
    setCurrentProfile(profile);
    setCurrentTabs(tabsPerProfile.get(profile)!);
  }

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
