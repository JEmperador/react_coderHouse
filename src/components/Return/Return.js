import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Return.css'

function Return() {
  return (
    <>
      <h3 className="text-center fontH3">Prueba Comprando algo</h3>
      <Link to="/" className="d-flex justify-content-center">
        <Button className="toHomeBtn" size="lg">
          Volver al Inicio
        </Button>
      </Link>
    </>
  );
}


export default Return;