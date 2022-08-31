import { useState, createContext } from "react";
import { db } from "../service/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";


const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState('');
  const [orderShipped, setOrderShipped] = useState(false)

  const emptyCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const newCartWithoutProduct = cart.filter((prod) => prod.id !== id);
    setCart(newCartWithoutProduct);
  };

  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);

    return product?.quantity;
  };

  const totalQuantity = () => {
    return cart.reduce((count, item) => (count += item.quantity), 0);
  };

  const totalPrice = () => {
    return cart.reduce((count, item) => count + item.quantity * item.price, 0);
  };

  const addItem = (product) => {
    if (!isInCart(product.id)) {
      setCart([...cart, product]);
    } else {
      const cartUpdated = cart.map((prod) => {
        if (prod.id === product.id) {
          const productUpdated = {
            ...prod,
            quantity: product.quantity,
          };
          return productUpdated;
        } else {
          return prod;
        }
      });
      setCart(cartUpdated);
    }
  };

  const createOrder = (buyerData) => {
    let order = {};

    order.buyer = buyerData;
    order.total = totalPrice();
    order.items = cart.map((item) => {
      const id = item.id;
      const name = item.name;
      const quantity = item.quantity;
      const newStock = item.stock - item.quantity;
      const price = item.price * item.quantity;
      return { id, name, quantity, newStock, price };
    });

    async function updateStocks() {
      const queryCollectionStocks = collection(db, "products");
      const queryUpdateStocks = query(
        queryCollectionStocks,
        where(
          documentId(),
          "in",
          cart.map((item) => item.id)
        )
      );
      const batch = writeBatch(db);

      await getDocs(queryUpdateStocks)
        .then((resp) => resp.docs.forEach((res) => batch.update(res.ref, { stock: order.items.find((item) => item.id === res.id).newStock })))
        .catch((err) => console.log(err));

      batch.commit();
    }

    const orders = collection(db, "orders");
    addDoc(orders, order)
      .then((resp) => setOrderId(resp.id))
      .then(() => setOrderShipped(true))
      .then(() => updateStocks())
      .catch((err) => console.log(err))
      .finally(() => emptyCart());
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  return <CartContext.Provider value={{ cart, orderId, orderShipped, emptyCart, removeItem, getProductQuantity, totalQuantity, totalPrice, addItem, isInCart, createOrder }}>{children}</CartContext.Provider>;
}

export default CartContext;
