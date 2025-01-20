import { Col, Container, Row } from "react-bootstrap"

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col size={12}>
            <h1>Arun Balchandran</h1>
            <h2>Seasoned software engineer skilled in project delivery and engineering solutions for complex technical challenges.</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}