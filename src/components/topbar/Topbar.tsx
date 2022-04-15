import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import ProfessorCourses from "../tabs/professor/ProfessorCourses";
import StudentCourses from "../tabs/student/StudentCourses";
import UserManagement from "../tabs/sysop/UserManagement";
import Wishlist from "../tabs/ta/Wishlist";

export default function Navigation() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>McGill</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="User Type" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Student</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">TA</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage(1);
              }}
            >
              Wishlist
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage(2);
              }}
            >
              Courses
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage(3);
              }}
            >
              Courses
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage(4);
              }}
            >
              Manage
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      <Container>
        {page === 1 && <Wishlist />}
        {page === 2 && <StudentCourses />}
        {page === 3 && <ProfessorCourses />}
        {page === 4 && <UserManagement />}
      </Container>
    </div>
  );
}
