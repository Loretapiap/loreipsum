import React, { useState } from "react";
import { useCartContext } from "../../../context/CartContext";

import CountButton from "./countButton";
import LikeButton from "./LikeButton";
import { NavLink } from "react-router-dom";

import "./item.css";
import ItemList from "./ItemList";

const Item = ({ item, setitem }) => {

  const [qty, setQty] = useState(0);
  const { addItem } = useCartContext();

  const onAdd = (item, quantityToAdd, stock) => {
    setQty(quantityToAdd);
    // setitem((prevState) => {
    //   return {
    //     ...prevState,
    //     stock: stock - quantityToAdd,
    //   };
    // });
    addItem(item, quantityToAdd);
  };
  const formatPrice = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <>
      <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <div>
        <NavLink to={`/product/${item.id}`}>
          <img
            className="hover:grow hover:shadow-lg"
            src={
              item.image ? item.image : "https://picsum.photos/200"
            }
          />
          </NavLink>
          <div className="pt-3 flex items-baseline justify-between">
            <NavLink to={`/product/${item.id}`}>
              <h3 className="title">{item.title ? item.title : "Producto"}</h3>
              <p className="text-gray-400">
                {item.description ? item.description : "Sin descripción"}
              </p>
            </NavLink>
            <LikeButton like={item.like} />
          </div>
          <div className="pt-3 flex items-baseline justify-between">
            <p className="pt-1 text-gray-900">
              CLP {item.price ? formatPrice(item.price) : "No disponible"}
            </p>
            <CountButton stock={item.stock} initialValue={1} onAdd={onAdd} item={item}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
