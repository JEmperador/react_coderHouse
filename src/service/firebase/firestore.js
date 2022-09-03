import { getDocs, collection, query, where, orderBy, getDoc, doc, documentId, writeBatch, addDoc } from "firebase/firestore";
import { adapter } from "../../adapters/prodAdapter";
import { db } from ".";

export const obtProducts = (categoryId) => {
  const ref = query(collection(db, "products"));
  const orderedRef = query(collection(db, "products"), orderBy("order"));

  const queryTipe = !categoryId ? orderedRef : query(ref, where("category", "==", categoryId));

  return getDocs(queryTipe)
    .then((response) => {
      const products = response.docs.map((doc) => {
        return adapter(doc);
      });
      return products;
    })
    .catch((error) => {
      return error;
    });
};

export const obtProduct = (detailId) => {
  return getDoc(doc(db, "products", detailId))
    .then((resp) => {
      const data = resp.data();
      const product = { id: resp.id, ...data };
      return product;
    })
    .catch((error) => {
      return error;
    });
};

export const obtOrder = async (order, items) => {
  const ids = items.map((prod) => prod.id);
      const ref = collection(db, "products");
      const productsDB = await getDocs(query(ref, where(documentId(), "in", ids)));
      let foundedOrder = []

      const { docs } = productsDB;
      const outStock = [];
      const lot = writeBatch(db);

      docs.forEach((doc) => {
        const infoDoc = doc.data();
        const stockDB = infoDoc.stock;

        const stockCart = items.find((prod) => prod.id === doc.id);
        const prodQuantity = stockCart?.quantity;

        if (stockDB >= prodQuantity) {
          lot.update(doc.ref, { stock: stockDB - prodQuantity });
        } else {
          outStock.push({ id: doc.id, ...infoDoc });
        }
      });

      if (outStock.length === 0) {
        await lot.commit();

        const orders = collection(db, "orders");
        foundedOrder = await addDoc(orders, order);

        return foundedOrder
      } else {
        console.log("Hay productos que carecen de existencia");
      }

      return foundedOrder
};
