import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ products }) {
  return (
    <div className="itemList">
      {products.map((prod) => <Item key={prod.id} product={prod}/>)}
    </div>
  );
}

export default ItemList;
