import { useEffect, useState } from "react";
import Delay from "../../components/Delay/Delay";
import ItemList from "../../components/ItemList/ItemList";
import { getProducts } from "../../data/asyncMock";
import "./ItemListContainer.css";

function ItemListContainer( props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setLoading(true);
    });
  }, []);

  return (
    <>
      <h1 className="title">{props.title}</h1>
      {!loading && <Delay/>}
      {loading && (
        <div className="productsList m-5">
          <ItemList products={products} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
