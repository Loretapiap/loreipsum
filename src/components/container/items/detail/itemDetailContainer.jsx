import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";
import { getFirestore } from "../../../../Firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setitem] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const itemCollectionDetail = itemCollection.doc(id);

    setisLoading(true);
    itemCollectionDetail
      .get()
      .then((doc) => {
        if (!doc.exists) {
          setisLoading(false);
          console.log(
            "Este producto no existe :("
          );
        } else {
          setitem({ id: doc.id, ...doc.data() });
        }
      })
      .catch((error) => {
        console.log(
          "Ups! Parece que hubo un error. Intenta recargar la página"
        );
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [id]);
  if (isLoading === true) {
    return (
      <>
        <div className="my-40 flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        </div>
      </>
    );
  } else {
    return <ItemDetail item={item} setitem={setitem} />;
  }
};

export default ItemDetailContainer;
