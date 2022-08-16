import { Button, ListGroup } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function CartList() {
  const { cart, emptyCart } = useContext(CartContext);

  return (
    <div>
      <ListGroup>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ListGroup>
      <div className="d-flex justify-content-between">
        <div>
          <Button size="lg" variant="warning" onClick={() => emptyCart()}>
            Vaciar Carrito
          </Button>
        </div>
        <div>
          <span className="text-end">Total: $XXX</span>
        </div>
      </div>
    </div>
  );
}

export default CartList;
