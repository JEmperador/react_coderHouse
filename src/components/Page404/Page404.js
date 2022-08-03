import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Page404.css"

function Page404() {
  return (
    <div className="page404">
      <h1 className="fontH1">404</h1>
      <h2 className="fontH2">Page not found</h2>
      <Link to="/">
        <Button variant="primary" size="lg" className="toHomeBtn">Volver al Inicio</Button>
      </Link>
    </div>
  );
}

export default Page404;
