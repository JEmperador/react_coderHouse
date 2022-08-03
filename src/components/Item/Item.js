import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ product }) {
  return (
    <Card className="product" border="light">
      <Card.Img variant="top" className="cardImg" src={product.img} />
      <Card.Body>
        <Card.Title className="productTitle">
          <h3 className="productName">{product.name}</h3>
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <div className="footerCard">
          <Link to={`/detail/${product.id}`}>
            <Button variant="primary" size="lg" className="detailBtn">
              Ver detalle
            </Button>
          </Link>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Item;
