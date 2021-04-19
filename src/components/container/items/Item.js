import React from "react";
import "./item.css";

const Item = ({ info }) => {
  return (
    <>
      <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <a href="#">
          <img
            className="hover:grow hover:shadow-lg"
            src={info.pictureUrl ? info.pictureUrl : 'https://picsum.photos/200'}
          />
          <div className="pt-3 flex items-baseline justify-between">
            <div>
              <h3 className="title">{info.title ? info.title : 'Producto'}</h3>
              <p className="text-gray-400">{info.description ? info.description : 'Sin descripción'}</p>
            </div>

            <i className="far fa-heart"></i>
          </div>
          <p className="pt-1 text-gray-900">CLP {info.price ? info.price : 'No disponible'}</p>
        </a>
      </div>
    </>
  );
};

export default Item;
