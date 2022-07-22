import carrito from "../../assets/images/cart.svg";
import { Badge } from "react-bootstrap";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div>
      <Badge className="fs-6 contador" pill bg="primary">
        0
      </Badge>
      <img src={carrito} alt="carrito" className="carrito" />
    </div>
  );
}

export default CartWidget;
