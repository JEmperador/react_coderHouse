import cart from "../../assets/images/cart.svg";
import { Badge } from "react-bootstrap";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div>
      <Badge className="fs-6 counter" pill bg="primary">
        0
      </Badge>
      <img src={cart} alt="cart" className="cart" />
    </div>
  );
}

export default CartWidget;
