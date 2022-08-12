import { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import "../ItemCount/ItemCount.css";

function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const counter = (unit) => {
    setCount(count + unit);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <ButtonToolbar>
          <ButtonGroup>
            <Button className="quantityBtn" onClick={() => counter(-1)} disabled={count === initial}>
              -
            </Button>
            <div className="quantity">{count}</div>
            <Button className="quantityBtn" onClick={() => counter(+1)} disabled={count === stock}>
              +
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>

      <div className="d-flex justify-content-center">
        <Button variant="primary" size="lg" className="m-2 addBtn" onClick={() => onAdd(count)}>
          Agregar
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
