import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail(product) {
  return (
    <div className="row">
      <div className="col detailContainer">
        <div>
          <img className="detailImg" src={product.img} alt="" />
        </div>
      </div>
      <div className="col btn">
        <h1 className="text-center textName">{product.name}</h1>
        <h2 className="text-center textCategory">{product.category}</h2>
        <p className="text-center textPrice">$ {product.price}</p>
        <div>
          <ItemCount initial={1} stock={product.stock} />
        </div>
      </div>
      <div className="row description">
        <p className="text-center">{product.description}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
