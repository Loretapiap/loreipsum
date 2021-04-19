import React from "react";
import Item from "./Item";

const ItemList = ({ products}) => {
  
console.log(products);
  return (
    <>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {products.map((product) => {
            return <Item key={product.id} info={product} />;
          })}
        </div>
      </section>
    </>
  )
  
};

export default ItemList;
