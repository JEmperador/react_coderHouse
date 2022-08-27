import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Delay from "../../components/Delay/Delay";
import { obtProduct } from "../../service/firebase/firestore";

function ItemDetailContainer(props) {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { detailId } = useParams();

  useEffect(() => {

    obtProduct(detailId).then(product => {
      setProduct(product)
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setLoading(true);
    })
  }, [detailId]);

  return (
    <div>
      <h1 className="title">{props.title}</h1>
      {!loading && <Delay />}
      {loading && (
        <div className="mt-5">
          <ItemDetail {...product} />
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
