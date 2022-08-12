import { useEffect, useState } from "react";
import { getProductById } from "../../data/asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Delay from "../../components/Delay/Delay";

function ItemDetailContainer(props) {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { detailId } = useParams();

  useEffect(() => {
    getProductById(detailId)
      .then((product) => {
        setProduct(product);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [detailId]);

  return (
    <div>
      <h1 className="title">{props.title}</h1>
      {!loading && <Delay />}
      {loading && (
        <div>
          <ItemDetail {...product} />
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
