import React from "react";
import { Link, useParams } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ products, setproducts }) => {
  const { slug } = useParams();
  return (
    <>
      {products.length > 0 ? (
        <>
          <section className="bg-white py-8">
            <div className="container mx-auto flex items-baseline flex-wrap pt-4 pb-12">
              {products.map((product) => {
                return (
                  <Item key={product.id} item={product} setitem={setproducts} />
                );
              })}
            </div>
          </section>
        </>
      ) : (
        <div className="container mx-auto">
          <div className="flex flex-col">
            <p className="text-center text-lg mt-5">
              No hay productos para la categoría <strong>{slug}</strong> :(
            </p>
            <div className="flex justify-center my-5">
              <Link
                className="mx-auto bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md"
                to="/"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemList;
