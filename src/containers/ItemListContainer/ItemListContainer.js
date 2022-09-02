import Delay from "../../components/Delay/Delay";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { obtProducts } from "../../service/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

function ItemListContainer(props) {
  const { categoryId } = useParams();
  const obtProds = () => obtProducts(categoryId);
  const { data, error, loading } = useAsync(obtProds, [categoryId]);

  return (
    <>
      {error && <h1>Hubo un error, recarga la pagina</h1>}
      <h1 className="title">{`${props.title} ${categoryId || ""}`}</h1>
      {!loading && <Delay />}
      {loading && (
        <>
          <div className="productsList mt-5">
            <ItemList products={data} />
          </div>
          <div className="WaLink text-center">
            <p>
              ¿Buscas otro producto? escribinos{" "}
              <a href="https://wa.me/5493816176941?text=Hola%20quiero%20consultar%20por%20[escriba%20aqui%20el%20producto%20que%20busca]" target="_blank" rel="noreferrer">
                aqui
              </a>
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default ItemListContainer;
