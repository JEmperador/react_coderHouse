import { useState } from "react";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";

import { db } from "../../service/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";

import "./FormBuyer.css";
import Delay from "../Delay/Delay";
import { useNavigate } from 'react-router-dom'

function FormBuyer() {
  const [loading, setLoading] = useState(false);
  const [orderShipped, setOrderShipped] = useState(false)
  const [orderId, setOrderId] = useState();
  const { cart, totalPrice, emptyCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    contact: "",
    comment: "",
  });
  const [address, setAddress] = useState({
    city: "",
    street: "",
    numeration: "",
  });

  const handleChangeBuyer = (e) => {
    const target = e.target;
    setBuyer({
      ...buyer,
      [target.name]: target.value,
    });
  };

  const handleChangeAddress = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const items = cart;
  const total = totalPrice();

  const to = useNavigate()

  const createOrder = async () => {
    setLoading(true)
    try {
      const order = {
        buyer,
        address,
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
        const foundedOrder = await addDoc(orders, order)

        emptyCart()
        setOrderId(foundedOrder.id)
        setOrderShipped(true)
        setTimeout(() => {
          to('/')
        }, 10000)
      } else {
        console.log('Hay productos que carecen de existencia');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    
  };

  console.log(buyer, address);

  if(loading) {
    return <Delay/>
  }

  if(orderShipped) {
    return <h1 className="text-center">Su orden fue realizada con exito, operacion: {orderId} sera redirigido</h1>
  }

  return (
    <>
      <Form className="mt-2">
        <Form.Group className="mb-3">
          <Form.Control className="form" type="text" placeholder="Nombre y Apellido" name="name" value={buyer.name} onChange={handleChangeBuyer} required />
          {buyer.name.length === 0 && <Form.Text>Debe ingresar un <b>Nombre</b></Form.Text>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control className="form" type="email" placeholder="Correo electronico" name="email" value={buyer.email} onChange={handleChangeBuyer} required />
          {buyer.email.length === 0 && <Form.Text>Debe ingresar un <b>Correo Electronico</b></Form.Text>}
        </Form.Group>
        <div className="d-flex mb-3">
          <Form.Group className="me-1 col">
            <Form.Control className="form" type="text" placeholder="Ciudad" name="city" value={address.city} onChange={handleChangeAddress} required />
            {address.city.length === 0 && <Form.Text>Debe ingresar una <b>Ciudad</b></Form.Text>}
          </Form.Group>
          <Form.Group className="mx-2 col">
            <Form.Control className="form" type="text" placeholder="Calle" name="street" value={address.street} onChange={handleChangeAddress} required />
            {address.street.length === 0 && <Form.Text>Debe ingresar una <b>Calle</b></Form.Text>}
          </Form.Group>
          <Form.Group className="ms-1 col">
            <Form.Control className="form" type="number" placeholder="Altura" name="numeration" value={address.numeration} onChange={handleChangeAddress} required />
            {address.numeration.length === 0 && <Form.Text>Debe ingresar una <b>Altura</b></Form.Text>}
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Control className="form" type="tel" placeholder="Numero de contacto" name="contact" value={buyer.contact} onChange={handleChangeBuyer} required />
          {buyer.contact.length <= 9 && <Form.Text>Debe ingresar una <b>Numero de Contato</b> valido</Form.Text>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control className="form" as="textarea" rows={3} type="textare" name="comment" placeholder="Comentario" value={buyer.comment} onChange={handleChangeBuyer} />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center">
        <Button className="createOrderBtn" size="lg" variant="outline-success" type="submit" onClick={createOrder}>
          Crear orden
        </Button>
      </div>
    </>
  );
}

export default FormBuyer;
