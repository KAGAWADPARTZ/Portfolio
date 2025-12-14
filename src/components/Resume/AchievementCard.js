import Card from "react-bootstrap/Card";

function AchievementCard(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body>
        <Card.Title className="purple">{props.title}</Card.Title>
        <h5 className="purple">
          {props.organization}
        </h5>
        {props.date && (
          <p className="achievement-date">
            {props.date}
          </p>
        )}
        {props.location && (
          <p className="achievement-location">
            {props.location}
          </p>
        )}
        {props.description && (
          <Card.Text>
            {props.description}
          </Card.Text>
        )}
        {props.details && props.details.length > 0 && (
          <ul className="achievement-list">
            {props.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </Card.Body>
    </Card>
  );
}

export default AchievementCard;

