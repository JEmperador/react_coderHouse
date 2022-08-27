import FormBuyer from "../../components/FormBuyer/FormBuyer";
import "./FormBuyerContainer.css";

function FormBuyerContainer(props) {
  return (
    <div className="formBuyerContainer">
      <h1 className="title">{props.title}</h1>
      <div className="mt-5">
        <FormBuyer />
      </div>
    </div>
  );
}

export default FormBuyerContainer;
