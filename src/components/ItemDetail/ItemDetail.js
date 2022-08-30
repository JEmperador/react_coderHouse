import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import OptionButtons from "../OptionButtons/OptionButtons";
import "./ItemDetail.css";

function ItemDetail(product) {
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const { addItem, getProductQuantity } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);

    const productToAdd = {
      ...product,
      quantity,
    };

    addItem(productToAdd);
  };

  const productQuantity = getProductQuantity(product.id);

  const outStock = <h1>Producto fuera de stock</h1>;
  const withStock = (
    <>
      <div className="btnOptions">
        <h1 className="text-center textName">{product.name}</h1>
        <h2 className="text-center textCategory">{product.category}</h2>
        <div>{quantityToAdd === 0 ? <ItemCount onAdd={handleOnAdd} initial={productQuantity} stock={product.stock} /> : <OptionButtons />}</div><p className="text-center textPrice">$ {product.price}</p>
      </div>
    </>
  );

  return (
    <div className="detail">
      <div className="containerImg">
        <img className="detailImg" src={product.img} alt="" />
      </div>
      <div className="description">
        <p className="text-center">{product.description}</p>
      </div>
      {product.stock <= 0 ? outStock : withStock}
    </div>
  );
}

export default ItemDetail;
