import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/container/ItemListContainer";

const Categories = () => {
  const { slug } = useParams();

  return (
    <>
      <ItemListContainer category={slug} />
    </>
  );
};
export default Categories;