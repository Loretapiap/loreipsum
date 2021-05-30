import React from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemList = ({ products, setproducts }) => {
  const { slug } = useParams();
  return (
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
  );
};

export default ItemList;
