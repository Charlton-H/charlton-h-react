import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div className="pt-5">
      <MDBFooter
        className="text-center text-white vh-50 "
        style={{ backgroundColor: '#f1f1f1' }}
      >
        <MDBContainer className="pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://linkedin.com/in/charltonhua"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <MDBIcon fab className="fa-linkedin" />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/Charlton-H"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <MDBIcon fab className="fa-github" />
            </a>
          </section>
        </MDBContainer>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            Charlton H
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
