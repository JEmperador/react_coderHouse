import FormBuyer from "../../components/FormBuyer/FormBuyer";
import "./FormBuyerContainer.css";

function FormBuyerContainer(props) {
  return (
    <div className="formBuyerContainer">
      <h1 className="title">{props.title}</h1>
      <div className="mt-5">
        <FormBuyer />
        {/* <div className="d-flex justify-content-center">
          <Button className="createOrderBtn" size="lg" variant="outline-success" type="submit">
            Crear orden
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default FormBuyerContainer;
