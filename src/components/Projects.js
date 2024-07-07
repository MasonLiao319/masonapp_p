import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/coming-soon.jpg";
import projImg2 from "../assets/img/coming-soon.jpg";
import projImg3 from "../assets/img/coming-soon.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Design & Development",
      imgUrl: projImg1,
      date: "July 6, 2024",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Design & Development",
      imgUrl: projImg2,
      date: "July 6, 2024",
      link: "#"
    },
    {
      title: "Project 3",
      description: "Design & Development",
      imgUrl: projImg3,
      date: "July 6, 2024",
      link: "#"
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
                      <div className="project-card" key={index}>
                        <div className="project-card-image">
                          <div className="overlay">
                            <h3 className="overlay-text">{project.title}</h3>
                          </div>
                          <img src={project.imgUrl} alt={project.title} />
                        </div>
                        <div className="project-info">
                          <h4>{project.title}</h4>
                          <p className="description">{project.description}</p>
                          <p className="date"><i className="far fa-calendar-alt"></i> {project.date}</p>
                          <a href={project.link}>Read more</a>
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
