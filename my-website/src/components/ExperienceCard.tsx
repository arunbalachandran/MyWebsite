import { Col } from "react-bootstrap"


export const ExperienceCard = ({title, description, details}: {title: String, description: String, details: String[]}) => {
  return (
    <Col sm={6} md={6}>
      <div>
        <div>
          <h3 className="h3">{title}</h3>
          <br />
          <h4 className="h4">{description}</h4>
          <br />
          <ul>
          {
            details.map((element, i) => {
              return (
                <li><h5 className="h5">{element}</h5></li>
              );
            })
          }
          </ul>
        </div>
      </div>
    </Col>
  )
}