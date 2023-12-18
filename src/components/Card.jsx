import { Card } from "react-bootstrap";

const Cards = (props) => {
  console.log(props);  
  return (
    <>
      <Card style={{  }}>
        <Card.Img variant="top" src={`./img/${props.item.img}`} />
        <Card.Body>
          <Card.Title className="card_h5">{props.item.heading}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
export default Cards;


// width: "100%"