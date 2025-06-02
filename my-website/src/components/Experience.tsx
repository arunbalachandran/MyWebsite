import { Col, Container, Row, Tab } from "react-bootstrap"
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {

  const projects = [
    {
      title: "CBRE",
      description: "Principal Software Engineer",
      details: [
        "Lead a team of 12, responsible for project delivery, technical solutioning of multiple workflows in the system using a microservices based architecture deployed on Kubernetes.",
        "Work as a Principal software engineer",
        "Designed and delivered workflows responsible for storage and processing of data for millions of assets across multiple regions with a throughput of greater than 2 million requests a day, resulting in a 500% increase in processing speed.",
        "As the SME, facilitated seamless collaboration between Product and multiple tech teams.",
        "Collaborate with Product and Architecture to design domain driven, scalable and performant services.",
        "Ensured fast delivery in a highly dynamic problem space, keeping pace with frequently changing business needs.",
        "Promoted wider adoption of Policy Engine (OPA) and Change Data Capture based patterns for data streaming."
      ]
    },
    {
      title: "Zimperium",
      description: "DevOps Engineer",
      details: [
        "Helped write Python based report generation utility to aggregate data from multiple data sources (Postgres and Elasticsearch) and email reports to internal and external customers.",
        "Worked on authentication API using Java based serverless functions (AWS Lambda), fronted by an API gateway (AWS API gateway) - with data out to Elasticsearch via a delivery stream (AWS Kinesis Data Firehose) for further processing which received upwards of 10 million requests an hour.",
        "Created build pipelines on TeamCity using a Git based VCS trigger, Continuous Integration with Artifactory being used as a registry, Continuous Delivery to Docker based developer environments with build promotion to production Kubernetes clusters using Helm and Ansible; using ELK based stack for data storage and log ingestion.",
        "Automated the CI / CD pipeline for multiple company projects using Kotlin (Teamcity DSL), Ansible, Python, Bash based tooling; enabling easier local development - supporting Kubernetes and Swarm based orchestration."
      ]
    }
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Experiences</h2>
            <p></p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map(
                          (project, index) => {
                          return (
                            <ExperienceCard key={index} {...project}/>
                          )
                        }
                      )
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}