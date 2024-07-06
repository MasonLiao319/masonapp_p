import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Project 2",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project 3",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore my portfolio of independently completed projects, demonstrating my expertise in web development, Python programming, and network security.</p>
                  <div className="project-card-container">
                    {projects.map((project, index) => (
                      <div className="project-card proj-imgbx" key={index}>
                        <img src={project.imgUrl} alt={project.title} />
                        <div className="proj-txtx">
                          <h4>{project.title}</h4>
                          <span>{project.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
