import { useState, createContext } from "react";
import { db } from "../service/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
/* import { useNavigate } from "react-router-dom"; */

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orderShipped, setOrderShipped] = useState(false);
  const [orderId, setOrderId] = useState('');

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

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  /* const to = useNavigate(); */
  const createOrder = async (buyerData) => {
    try {
      const order = {
        buyer: buyerData,
        cart,
        total: totalPrice(),
        date: new Date(),
      };

      const ids = cart.map((prod) => prod.id);
      const ref = collection(db, "products");
      const productsDB = await getDocs(query(ref, where(documentId(), "in", ids)));

      const { docs } = productsDB;
      const outStock = [];
      const lot = writeBatch(db);

      docs.forEach((doc) => {
        const infoDoc = doc.data();
        const stockDB = infoDoc.stock;

        const stockCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = stockCart?.quantity;

        if (stockDB >= prodQuantity) {
          lot.update(doc.ref, { stock: stockDB - prodQuantity });
        } else {
          outStock.push({ id: doc.id, ...infoDoc });
        }
      });

      if (outStock.length === 0) {
        await lot.commit();

        const orders = collection(db, "orders");
        const foundedOrder = await addDoc(orders, order);

        setOrderId(foundedOrder.id);
        setOrderShipped(true);
        setTimeout(() => {
          emptyCart();
          /* to("/"); */
        }, 5000);
      } else {
        console.log("Hay productos que carecen de existencia");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return <CartContext.Provider value={{ cart, orderId, orderShipped, emptyCart, removeItem, getProductQuantity, totalQuantity, totalPrice, addItem, isInCart, createOrder }}>{children}</CartContext.Provider>;
}

export default CartContext;
