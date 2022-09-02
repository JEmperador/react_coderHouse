import CartList from "../../components/CartList/CartList";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./CartListContainer.css";
import Return from "../../components/Return/Return";

function CartListContainer(props) {
  const { cart } = useContext(CartContext);

  return (
    <div className="CartListContainer">
      <h1 className="title">{props.title}</h1>
      <div className="mt-5">
        {cart.length !== 0 ? (
          <>
            <CartList />
            <div className="d-flex justify-content-center">
              <Link to="/checkout">
                <Button className="checkoutBtn" size="lg" variant="outline-success">
                  Datos de comprador
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <Return />
        )}
      </div>
    </div>
  );
}

export default CartListContainer;
