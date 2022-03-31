import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function NavTabs({ currentPage, handlePageChange }) {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid className="container-lg">
        <MDBNavbarBrand href="#" className="fs-1">
          Charlton H
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav className="justify-content-end gap-4  fs-3">
            <MDBNavbarLink
              href="#about"
              onClick={() => handlePageChange('About')}
              className={
                currentPage === 'About' ? 'nav-link active' : 'nav-link'
              }
            >
              About Me
            </MDBNavbarLink>
            <MDBNavbarLink
              href="#project"
              onClick={() => handlePageChange('Project')}
              className={
                currentPage === 'Project' ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </MDBNavbarLink>
            <MDBNavbarLink href="#contact">Contact</MDBNavbarLink>
            <MDBNavbarLink
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={
                currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
              }
            >
              Resume
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
