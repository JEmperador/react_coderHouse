import { Button, ListGroup } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CartList.css";

function CartList() {
  const { cart, totalPrice, emptyCart } = useContext(CartContext);

  const price = totalPrice();

  return (
    <div>
      <ListGroup>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ListGroup>
      <div className="d-flex justify-content-between">
        <div>
          <Button className="emptyCartBtn" size="lg" variant="warning" onClick={() => emptyCart()}>
            Vaciar Carrito
          </Button>
        </div>
        <div className="total">
          <span className="text-end">Total: $ {price}</span>
        </div>
      </div>
    </div>
  );
}

export default CartList;
