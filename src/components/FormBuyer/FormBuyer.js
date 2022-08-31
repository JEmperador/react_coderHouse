import { useState } from "react";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import "./FormBuyer.css";

function FormBuyer() {
  const { createOrder } = useContext(CartContext);
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
    if (buyerData.name && buyerData.email && buyerData.email2 === buyerData.email && buyerData.contact && buyerData.comment && buyerData.city && buyerData.street && buyerData.numeration) {
      createOrder(buyerData);
    }
  };

  return (
    <>
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
    </>
  );
}

export default FormBuyer;
