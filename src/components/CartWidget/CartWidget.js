import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import cart from "../../assets/images/cart.svg";
import "./CartWidget.css";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  const quantity = totalQuantity();

  return (
    <div>
      <Link to={quantity !== 0 ? "/cart" : "/"}>
        <Badge pill className="fs-6 counter" bg="primary">
          {quantity !== 0 && quantity}
        </Badge>
        <img src={cart} alt="cart" className="cart" />
      </Link>
    </div>
  );
}

export default CartWidget;
