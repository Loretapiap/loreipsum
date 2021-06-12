import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";
import { getFirestore } from "../../../../Firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setitem] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);

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
          setError("Este producto no existe :(");
        } else {
          setitem({ id: doc.id, ...doc.data() });
        }
      })
      .catch((error) => {
        setError("Ups! Parece que hubo un error. Intenta recargar la página");
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <>
          <div className="my-40 flex flex-col items-center justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          </div>
        </>
      ) : error ? (
        <div className="bg-gradient-to-r from-gray-300 to-blue-200">
          <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
              <div className="border-t border-gray-200 text-center pt-8">
                <h1 className="text-4xl font-medium p-8">
                  {error}
                </h1>
                <Link className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md" to="/">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ItemDetail item={item} setitem={setitem} />
      )}
    </>
  );
};

export default ItemDetailContainer;
