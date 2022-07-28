import Whatsapp from "../../assets/images/wa.svg";
import "./WaBtn.css";

function WsBtn() {
  return (
    <div className="fixed">
      <a href="https://wa.me/5493816176941?text=Hola%20quiero%20hacer%20una%20consulta" target="_blank" rel="noreferrer">
        <img src={Whatsapp} alt="Whatsapp" className="waImg" />
      </a>
    </div>
  );
}

export default WsBtn;
