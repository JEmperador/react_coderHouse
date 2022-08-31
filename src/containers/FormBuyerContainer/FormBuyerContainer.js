import FormBuyer from "../../components/FormBuyer/FormBuyer";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import "./FormBuyerContainer.css";
import Return from "../../components/Return/Return";
import Success from "../../components/Success/Success";
import Delay from "../../components/Delay/Delay";

function FormBuyerContainer(props) {
  const { cart, orderId, getProductQuantity, orderShipped } = useContext(CartContext);
  const [loading, setLoading] = useState(false)
/*   if (getProductQuantity()) {
    return <>{!orderShipped ? (cart.length !== 0 ? <FormBuyer /> : <Return />) : <Success/>}</>;
  } */

  useEffect(() => {
    if(orderShipped) {
      setLoading(true);
    }
  }, [orderShipped])

  console.log(orderId);
  return (
    <div className="formBuyerContainer">
      <h1 className="title">{props.title}</h1>
      {!loading && <Delay/>}
      {loading && (
        <>
        {orderShipped ? <Success/> : <Return />}
        <FormBuyer />
        </>
      )}
      
    </div>
  );
  /* <div className="formBuyerContainer">
      {orderId && <h1>Pedido realizado con existo, orden: {orderId}</h1>}

      <>
        <h1 className="title">{props.title}</h1>
        <div className="mt-5">{cart.length !== 0 ? <FormBuyer /> : <Return />}</div>
      </> */

  /* <h1 className="title">{props.title}</h1>
      <div className="mt-5">
        {cart.length !== 0 ? (
          <FormBuyer />
        ) : (
          <Return/>
        )}
      </div> */
  /* </div> */
}

export default FormBuyerContainer;
