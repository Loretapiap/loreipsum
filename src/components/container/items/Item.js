import React, { useState } from "react";
import CountButton from "./countButton";
import LikeButton from "./LikeButton";
import { NavLink } from "react-router-dom";

import "./item.css";

const Item = ({ info }) => {
  const [isCount, setisCount] = useState(false);

  return (
    <>
      <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <div>
        <NavLink to={`/product/${info.id}`}>
          <img
            className="hover:grow hover:shadow-lg"
            src={
              info.pictureUrl ? info.pictureUrl : "https://picsum.photos/200"
            }
          />
          </NavLink>
          <div className="pt-3 flex items-baseline justify-between">
            <NavLink to={`/product/${info.id}`}>
              <h3 className="title">{info.title ? info.title : "Producto"}</h3>
              <p className="text-gray-400">
                {info.description ? info.description : "Sin descripción"}
              </p>
            </NavLink>
            <LikeButton like={info.like} />
          </div>
          <div className="pt-3 flex items-baseline justify-between">
            <p className="pt-1 text-gray-900">
              CLP {info.price ? info.price : "No disponible"}
            </p>
            <CountButton added={isCount} max={info.stock} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
