import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

function ProjectList() {
  const [projects] = useState([
    {
      name: 'Save da Money',
      decription: 'Budget tracking project showcasing service-worker knowledge',
      url: 'https://hidden-cliffs-27191.herokuapp.com/',
      img: 'save-dat-money.PNG',
    },
    {
      name: 'Social Network',
      decription: 'Blog project showcasing NoSQL, Mongo Database, knowledge',
      url: 'https://glacial-mesa-52069.herokuapp.com/',
      img: 'social-network.PNG',
    },
    {
      name: 'Randm',
      decription:
        'Chat Messaging group project showcasing Handlebars, MySQL Database knowledge',
      url: 'https://ran-dm.herokuapp.com/login',
      img: 'Randm.png',
    },
    {
      name: 'YourFace Blog',
      decription: 'Blog project showcasing MySQL Database knowledge',
      url: 'https://shrouded-fortress-91419.herokuapp.com/',
      img: 'yourface-blog.PNG',
    },
    {
      name: 'Note Taker',
      decription: 'Note taking project showcasing Express.js knowledge',
      url: 'https://ch-note-taker.herokuapp.com/',
      img: 'note-taker-demo.PNG',
    },
    {
      name: 'ReadMe Generator',
      decription:
        'CLI, ReadMe.md Generator project showcasing Inquirer.js npm knowledge',
      url: 'https://github.com/Charlton-H/readme-generator',
      img: 'readme-demo.PNG',
    },
  ]);

  return (
    <section className="container pt-4">
      <h2>Projects</h2>
      <MDBRow className="row-cols-1 row-cols-md-2 g-4 pt-5">
        {projects.map((project) => (
          <MDBCol key={project.name}>
            <MDBCard onClick={() => window.open(project.url)}>
              <MDBCardImage
                src={require(`../../assets/images/${project.img}`)}
                alt={project.name}
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>{project.name}</MDBCardTitle>
                <MDBCardText>{project.decription}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </section>
  );
}

export default ProjectList;
