import { Col, Container, Row, Tab } from "react-bootstrap"
import projectImg1 from "../assets/ehealth_logo.png";
import projectImg2 from "../assets/video_clip.png";
import projectImg3 from "../assets/tictactoe_logo.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const projects = [
    {
      title: "EHealth",
      description: "SpringBoot & React based Health Portal for Doctors & Patients",
      imgUrl: projectImg1
    },
    {
      title: "Video Search In Spark",
      description: "Adding semantic search capability in Videos using NLP",
      imgUrl: projectImg2
    },
    {
      title: "TicTacToe",
      description: "Terminal based TicTacToe game in Python",
      imgUrl: projectImg3
    }
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Curated personal projects</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/* <Nav variant="pills" defaultActiveKey="/home" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav> */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map(
                          (project, index) => {
                          return (
                            <ProjectCard key={index} {...project}/>
                          )
                        }
                      )
                    }
                  </Row>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="second">
                  <Row>
                    {
                      projects.map(
                          (project, index) => {
                          return (
                            <p>{project.title}</p>
                          )
                        }
                      )
                    }
                  </Row>
                </Tab.Pane> */}
                {/* <Tab.Pane eventKey="third">
                  <Row>
                    {
                      projects.map(
                          (project, index) => {
                          return (
                            <p>{project.title}</p>
                          )
                        }
                      )
                    }
                  </Row>
                </Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section> 
  )
}