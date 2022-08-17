import { useEffect, useState } from "react";
import Delay from "../../components/Delay/Delay";
import ItemList from "../../components/ItemList/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const ref = collection(db, "products");

    const queryTipe = !categoryId ? ref : query(ref, where("category", "==", categoryId));

    getDocs(queryTipe)
      .then((response) => {
        const products = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(true);
      });
  }, [categoryId]);

  return (
    <>
      <h1 className="title">{`${props.title} ${categoryId || ""}`}</h1>
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
