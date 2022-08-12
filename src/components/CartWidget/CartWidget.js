import cart from "../../assets/images/cart.svg";
import { Badge } from "react-bootstrap";
import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getQuantity } = useContext(CartContext);

  const quantity = getQuantity();

  return (
    <div>
      <Link to='/cart'>
        <Badge className="fs-6 counter" pill bg="primary">
          {quantity}
        </Badge>
        <img src={cart} alt="cart" className="cart" />
      </Link>
    </div>
  );
}

export default CartWidget;
