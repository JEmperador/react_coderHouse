import FormBuyer from "../../components/FormBuyer/FormBuyer";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./FormBuyerContainer.css";
import Return from "../../components/Return/Return";

function FormBuyerContainer(props) {
  const { cart, orderId, orderShipped } = useContext(CartContext);

  console.log(orderId);
  console.log(orderShipped);

  return (
    <div className="formBuyerContainer">
      {orderShipped && (
        <h1 className="cartEmpty__title">
          Pedido enviado! <br /> Nro de pedido: {orderId}
        </h1>
      )}
      {!orderShipped && (
        <>
          <h1 className="title">{props.title}</h1>
          <div className="mt-5">{cart.length !== 0 ? <FormBuyer /> : <Return />}</div>
        </>
      )}
    </div>
  );
}

export default FormBuyerContainer;
