import { Badge, Button, ListGroup } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import trash from "../../assets/images/trash.svg";
import "./CartItem.css";

function CartItem({ product }) {
  const { removeItem } = useContext(CartContext);

  const deleteItem = () => {
    removeItem(product.id);
  };

  return (
    <div className="cartItemContainer">
      <div className="pointer"></div>
      <ListGroup.Item as="li" key={product.id} className="d-flex justify-content-between cartItem">
        <img src={product.img} alt="" className="productImg" />
        <div className="ms-2 me-auto">
          {product.category} - {product.name}
          <div>Valor: ${product.price}</div>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-end">
            <Badge pill className="fs-5" bg="success">
              {product.quantity}
            </Badge>
          </div>
          <div>
            <Button variant="link" onClick={deleteItem}>
              <img src={trash} alt="trash" className="trash" />
            </Button>
          </div>
        </div>
      </ListGroup.Item>
    </div>
  );
}

export default CartItem;
