import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl}: {title: String, description: String, imgUrl: string}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4><span>{description}</span>
        </div>
      </div>
    </Col>
  )
}