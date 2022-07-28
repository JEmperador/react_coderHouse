import { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import "../ItemCount/ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const counter = (unit) => {
    setCount(count + unit);
  };

  const toCart = () => {
    console.log(count === 1 ? `Agregaste ${count} unidad` : `Agregaste ${count} unidades`);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <ButtonToolbar>
          <ButtonGroup>
            <Button onClick={() => counter(-1)} disabled={count === initial}>
              -
            </Button>
            <div className="quantity text-center">{count}</div>
            <Button onClick={() => counter(+1)} disabled={count === stock}>
              +
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>

      <div className="d-flex justify-content-center">
        <Button variant="primary" size="lg" className="m-2 addBtn" onClick={toCart}>
          <h3>Agregar</h3>
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
