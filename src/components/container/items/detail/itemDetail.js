import React, { useState } from "react";
import {Link} from "react-router-dom";
import { useCartContext } from "../../../../context/CartContext";

import { useParams } from "react-router-dom";
import CountButton from "../countButton";

const ItemDetail = ({ item, setitem }) => {
  const { id } = useParams();

  const [qty, setQty] = useState(0);
  const { addItem } = useCartContext();

  const onAdd = (item, quantityToAdd, stock) => {
    setQty(quantityToAdd);
    setitem((prevState) => {
      return {
        ...prevState,
        stock: stock - quantityToAdd,
      };
    });
    addItem(item, quantityToAdd);
  };
  const formatPrice = (number) => {
    return new Intl.NumberFormat().format(number);
  };
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={item.title}
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={item.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                ID: #{id}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {item.title ? item.title : "Sin nombre"}
              </h1>
              <div className="flex items-center mb-4">
                <span className="flex item-center">
                  <i className="fas fa-star text-red-500"></i>
                  <i className="fas fa-star text-red-500"></i>

                  <i className="fas fa-star text-red-500"></i>

                  <i className="fas fa-star text-red-500"></i>

                  <i className="far fa-star text-red-500"></i>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <i className="fas fa-comment"></i>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                {item.description ? item.description : "Sin descripción"}
              </p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {item.price
                    ? `$${formatPrice(item.price)}`
                    : "Consultar precio"}
                </span>
                <CountButton
                  stock={item.stock}
                  initialValue={1}
                  onAdd={onAdd}
                  item={item}
                />
              </div>
              <div>
                {qty > 0 && (
                  <Link to="/cart" className="button">
                    Terminar Compra
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
