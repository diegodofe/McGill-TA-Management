import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../App";
import { UserTypes } from "../../enums/UserTypes";
import ProfessorCourses from "../tabs/professor/ProfessorCourses";
import StudentCourses from "../tabs/student/StudentCourses";
import UserManagement from "../tabs/sysop/UserManagement";
import Wishlist from "../tabs/ta/Wishlist";

export default function Navigation() {
  const { user, setUser } = useContext(UserContext);
  const userProfiles: Array<UserTypes> = [UserTypes.Student, UserTypes.Sysop];

  const [currentProfile, setCurrentProfile] = useState<UserTypes>(userProfiles[0]);

  const tabsPerProfile = new Map<UserTypes, Array<JSX.Element>>([
    [UserTypes.Student, [<StudentCourses />, <Wishlist />]],
    [UserTypes.Sysop, [<ProfessorCourses />]],
  ]);

  const [currentTabs, setCurrentTabs] = useState<Array<JSX.Element>>(tabsPerProfile.get(currentProfile)!);
  const [currentPage, setCurrentPage] = useState<JSX.Element>(currentTabs[0]);

  function handleNavClick(profile: UserTypes): void {
    setCurrentProfile(profile);
    setCurrentTabs(tabsPerProfile.get(profile)!);
    setCurrentPage(tabsPerProfile.get(profile)![0]);
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
        <Nav variant="tabs" defaultActiveKey={0}>
          {currentTabs?.map((tab, i) => (
            <Nav.Item>
              <Nav.Link
                key={i}
                eventKey={i}
                onClick={() => {
                  setCurrentPage(tab);
                }}
              >
                {`${currentProfile} Tab ${i}`}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>

      <Container>{currentPage}</Container>
    </div>
  );
}
