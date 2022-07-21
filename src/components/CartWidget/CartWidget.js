import carrito from "../../assets/images/cart.svg";
import "./CartWidget.css";

function CartWidget() {
  return (
    <>
      <img src={carrito} alt="carrito" className="carrito" />
    </>
  );
}

export default CartWidget;
