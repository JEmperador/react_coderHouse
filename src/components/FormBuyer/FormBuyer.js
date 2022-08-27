import { useState } from "react";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";

import { db } from "../../service/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";

import "./FormBuyer.css";
import Delay from "../Delay/Delay";
import { useNavigate } from "react-router-dom";

function FormBuyer() {
  const { cart, totalPrice, emptyCart } = useContext(CartContext);

  const items = cart;
  const total = totalPrice();
  
  const [loading, setLoading] = useState(false);
  const [orderShipped, setOrderShipped] = useState(false);
  const [orderId, setOrderId] = useState();

  const [buyerData, setBuyerData] = useState({});
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [email2, setEmail2] = useState(false);
  const [contact, setContact] = useState(false);
  const [comment, setComment] = useState(false);
  const [city, setCity] = useState(false);
  const [street, setStreet] = useState(false);
  const [numeration, setNumeration] = useState(false);

  const handleChange = (e) => {
    setBuyerData({
      ...buyerData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const dataManagement = () => {
    setName(!buyerData.name);
    setEmail(!buyerData.email);
    setEmail2(!(buyerData.email2 === buyerData.email));
    setContact(!buyerData.contact);
    setComment(!buyerData.comment);
    setCity(!buyerData.city);
    setStreet(!buyerData.street);
    setNumeration(!buyerData.numeration);
    if(buyerData.name && buyerData.email && (buyerData.email2 === buyerData.email) && buyerData.contact && buyerData.comment && buyerData.city && buyerData.street && buyerData.numeration) {
      createOrder(buyerData)
    }
  }

  const to = useNavigate();

  const createOrder = async (buyerData) => {
    setLoading(true);
    try {
      const order = {
        buyer: buyerData,
        items,
        total,
        date: new Date(),
      };

      const ids = items.map((prod) => prod.id);
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

        emptyCart();
        setOrderId(foundedOrder.id);
        setOrderShipped(true);
        setTimeout(() => {
          to("/");
        }, 10000);
      } else {
        console.log("Hay productos que carecen de existencia");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(buyerData);

  if (loading) {
    return <Delay />;
  }

  if (orderShipped) {
    return <h1 className="text-center">Su orden fue realizada con exito, operacion: {orderId} sera redirigido</h1>;
  }

  return (
    <>
      <Form className="mt-2">
        <Form.Group className="mb-3">
          <Form.Control className="form" type="text" placeholder="Nombre y Apellido" name="name" onChange={(e) => handleChange(e)} />
          {name && (
            <Form.Text>
              Debe ingresar un <b>Nombre</b>
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control className="form" type="email" placeholder="Correo electronico" name="email" onChange={(e) => handleChange(e)} />
          {email && (
            <Form.Text>
              Debe ingresar un <b>Correo Electronico</b>
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control className="form" type="email2" placeholder="Repite tu Correo electronico" name="email2" onChange={(e) => handleChange(e)} />
          {email2 && (
            <Form.Text>
              El <b>Correo Electronico</b> no coincide
            </Form.Text>
          )}
        </Form.Group>
        <div className="d-flex mb-3">
          <Form.Group className="me-1 col">
            <Form.Control className="form" type="text" placeholder="Ciudad" name="city" onChange={(e) => handleChange(e)} />
            {city && (
              <Form.Text>
                Debe ingresar una <b>Ciudad</b>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mx-2 col">
            <Form.Control className="form" type="text" placeholder="Calle" name="street" onChange={(e) => handleChange(e)} />
            {street && (
              <Form.Text>
                Debe ingresar una <b>Calle</b>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="ms-1 col">
            <Form.Control className="form" type="number" placeholder="Altura" name="numeration" onChange={(e) => handleChange(e)} />
            {numeration && (
              <Form.Text>
                Debe ingresar una <b>Altura</b>
              </Form.Text>
            )}
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Control className="form" type="tel" placeholder="Numero de contacto" name="contact" onChange={(e) => handleChange(e)} />
          {contact && (
            <Form.Text>
              Debe ingresar una <b>Numero de Contato</b> valido
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control className="form" as="textarea" rows={3} type="textare" name="comment" placeholder="Comentario" onChange={(e) => handleChange(e)} />
          {comment && (
            <Form.Text>
              Ingresar un <b>Comentario</b>
          </Form.Text>
          )}
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center">
        <Button className="createOrderBtn" size="lg" variant="outline-success" type="submit" onClick={dataManagement}>
          Crear orden
        </Button>
      </div>
    </>
  );
}

export default FormBuyer;
