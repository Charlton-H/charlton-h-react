import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="pt-5">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
        id="contact"
      >
        <section className="container d-flex justify-content-center justify-content-lg-end p-4 border-bottom">
          <div className="container text-center text-md-start">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Find Me Online</h6>
                <p>
                  <a
                    href="https://linkedin.com/in/charltonhua"
                    className="me-4 text-reset"
                  >
                    <i className="fab fa-facebook-f me-4"></i> Facebook
                  </a>
                </p>
                <p>
                  <a
                    href="https://linkedin.com/in/charltonhua"
                    className="me-4 text-reset"
                  >
                    <i className="fab fa-twitter me-3"></i> Twitter
                  </a>
                </p>
                <p>
                  <a
                    href="https://linkedin.com/in/charltonhua"
                    className="me-4 text-reset"
                  >
                    <i className="fab fa-linkedin me-3"></i> LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/Charlton-H"
                    className="me-4 text-reset"
                  >
                    <i className="fab fa-github me-3"></i> GitHub
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> San Francisco Bay Area,
                  CA
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  charltonhua@outlook.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 1 415.745.1091
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            {' '}
            Charlton H
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
