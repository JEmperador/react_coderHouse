import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Delay from "../../components/Delay/Delay";
import { obtProduct } from "../../service/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

function ItemDetailContainer(props) {
  const { detailId } = useParams();
  const obtProd = () => obtProduct(detailId);
  const { data, error, loading } = useAsync(obtProd, [detailId]);

  return (
    <>
      {error && <h1>Hubo un error, recarga la pagina</h1>}
      <h1 className="title">{props.title}</h1>
      {!loading && <Delay />}
      {loading && (
        <div className="mt-5">
          <ItemDetail {...data} />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
