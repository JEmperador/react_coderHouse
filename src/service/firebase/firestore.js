import { getDocs, collection, query, where, orderBy, getDoc, doc } from "firebase/firestore";
import { db } from ".";

export const obtProducts = (categoryId) => {
  const ref = query(collection(db, "products"));
  const orderedRef = query(collection(db, "products"), orderBy("order"));

  const queryTipe = !categoryId ? orderedRef : query(ref, where("category", "==", categoryId));

  return getDocs(queryTipe)
    .then((response) => {
      const products = response.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
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
      })
}