import FormBuyer from "../../components/FormBuyer/FormBuyer";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./FormBuyerContainer.css";
import Return from "../../components/Return/Return";

function FormBuyerContainer(props) {
  const { cart } = useContext(CartContext);
  return (
    <div className="formBuyerContainer">
      <h1 className="title">{props.title}</h1>
      <div className="mt-5">
        {cart.length !== 0 ? (
          <FormBuyer />
        ) : (
          <Return/>
        )}
      </div>
    </div>
  );
}

export default FormBuyerContainer;
