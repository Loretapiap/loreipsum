import React, { useState, useEffect } from "react";
import ItemList from "./items/ItemList";
import { getFirestore } from "../../Firebase";

const ItemListContainer = ({ category }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    if (category) {
      const categoryItems = itemCollection.where("category", "==", category);

      setisLoading(true);

      categoryItems
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.length === 0) {
            console.log("Error");
          } else {
            if (querySnapshot.docs.length === 0) {
              console.log("No hay productos en esta categoría");
            } else {
              setItems(
                querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
              );
            }
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setisLoading(false));
    } else {
      setisLoading(true);
      itemCollection
        .where("stock", "!=", 0)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.length === 0) {
            console.log("No hay datos disponibles");
            setisLoading(false);
          } else {
            setItems(
              querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
            setisLoading(false);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [category]);
  if (isLoading === true) {
    return (
      <>
        <div className="my-40 flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <ItemList products={items} setproducts={setItems} />
      </>
    );
  }
};

export default ItemListContainer;
