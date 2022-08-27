import { useEffect, useState } from "react";
import Delay from "../../components/Delay/Delay";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { obtProducts } from "../../service/firebase/firestore";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {

    obtProducts(categoryId).then(products => {
      setProducts(products)
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setLoading(true);
    })
  }, [categoryId]);

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
