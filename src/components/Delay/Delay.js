import { Spinner } from "react-bootstrap";

function Delay() {
  const resize = { width: "5rem", height: "5rem" };
  return (
    <div className="loading">
      <Spinner style={resize} animation="grow" variant="primary" />
    </div>
  );
}

export default Delay;
