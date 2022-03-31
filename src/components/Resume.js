import React from 'react';
import { MDBCard, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Resume() {
  return (
    <section className="container pt-5">
      <h2>Resume</h2>
      <MDBRow className="row-cols-1 row-cols-md-1 g-4 pt-5">
        <MDBCol>
          <MDBCard
            onClick={() =>
              window.open(require('../assets/Charlton_Hua_Resume.pdf'))
            }
          >
            <MDBCardImage
              src={require('../assets/images/resume.PNG')}
              alt="charlton-h-resume"
              position="top"
            />
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Resume;
