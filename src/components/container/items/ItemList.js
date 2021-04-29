import React from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemList = ({ products }) => {
  const { slug } = useParams();
  return (
    <>
    {/* $scope.applicationsHere.flatMap(obj => obj.selected ? obj.id : []) */}
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {products.flatMap((product) => {
            if(product.category == slug) {
              return <Item key={product.id} info={product} />;
            } else if(!slug) {
              return <Item key={product.id} info={product} />;
            } else {
              // do nothing
            }
          })}
        </div>
      </section>
    </>
  );
};

export default ItemList;
