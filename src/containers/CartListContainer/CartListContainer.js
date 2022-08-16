import CartList from "../../components/CartList/CartList";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './CartListContainer.css'

function CartListContainer(props) {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h1 className="title">{props.title}</h1>
      {cart.length !== 0 ? (
        <CartList />
      ) : (
        <>
          <h3 className="text-center fontH3">Prueba Comprando algo</h3>
          <Link to="/" className="d-flex justify-content-center">
            <Button className="toHomeBtn" size="lg">Volver al Inicio</Button>
          </Link>
        </>
      )}
    </>
  );
}

export default CartListContainer;
