import { useContext } from "react";
import CartContext from "../../context/CartContext";

function Success() {
    const {orderId } = useContext(CartContext);
    return (
        <>
            <h1>Compra realizada con Éxito!</h1>
            <p>Orden de pedido: {orderId}</p>
        </>
    )
}

export default Success;