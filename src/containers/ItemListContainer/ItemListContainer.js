import { useEffect, useState } from "react";
import Delay from "../../components/Delay/Delay";
import ItemList from "../../components/ItemList/ItemList";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import { db } from "../../service/firebase";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const ref = query(collection(db, "products"))
    const orderRef = query(collection(db, "products"), orderBy("order"));

    const queryTipe = !categoryId ? orderRef : query(ref, where("category", "==", categoryId));

    getDocs(queryTipe)
      .then((response) => {
        const products = response.docs.map((doc) => {
          const data = doc.data();
          console.log(doc);
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

  if (products.length === 0) {
    <h1 className="text-center">Pagina en mantenimiento! vuelve en unos minutos...</h1>;
  }

  return (
    <>
      <h1 className="title">{`${props.title} ${categoryId || ""}`}</h1>
      {!loading && <Delay />}
      {loading && (
        <>
          <div className="productsList mt-5">
            <ItemList products={products} />
          </div>
          <div className="WaLink text-center">
            <p>
              ¿Buscas otro producto? escribinos <a href="https://wa.me/5493816176941?text=Hola%20quiero%20consultar%20por%20[escriba%20aqui%20el%20producto%20que%20busca]" target="_blank" rel="noreferrer">aqui</a>
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default ItemListContainer;
