import { Badge, Button, ListGroup } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CartItem.css"

function CartItem({ product }) {
  const { removeItem } = useContext(CartContext);

  const deleteItem = () => {
    removeItem(product.id);
  };

  return (
    <ListGroup.Item as="li" key={product.id} className="d-flex justify-content-between mt-2">
      <img src={product.img} alt="" className="productImg" />
      <div className="ms-2 me-auto">
        {product.category} - {product.name}
        <div>Precio: ${product.price}</div>
      </div>
      <div className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-end">
          <Badge pill className="fs-5" bg="success">
            {product.quantity}
          </Badge>
        </div>
        <div className="">
          <Button className="justify-content-center" variant="warning" onClick={deleteItem}>
            Quitar
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}

export default CartItem;