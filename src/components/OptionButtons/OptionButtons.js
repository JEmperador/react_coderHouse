import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OptionButtons.css";

function OptionButtons() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Link to="/cart" className="">
        <Button variant="outline-success" size="lg" className="m-2 optionBtn">
          Finalizar Compra
        </Button>
      </Link>
      <Link to="/" className="">
        <Button variant="outline-primary" size="lg" className="m-2 optionBtn">
          Ir a la Tienda
        </Button>
      </Link>
    </div>
  );
}

export default OptionButtons;
