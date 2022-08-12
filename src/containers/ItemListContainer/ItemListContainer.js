import { useEffect, useState } from "react";
import Delay from "../../components/Delay/Delay";
import ItemList from "../../components/ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const typeGetArgument = categoryId ? getProductsByCategory : getProducts;
    typeGetArgument(categoryId)
      .then((products) => {
        setProducts(products);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1 className="title">{`${props.title} ${categoryId || ''}`}</h1>
      {!loading && <Delay />}
      {loading && (
        <div className="productsList m-5">
          <ItemList products={products} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
