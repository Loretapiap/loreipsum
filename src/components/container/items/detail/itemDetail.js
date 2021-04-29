import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const { id } = useParams();

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={item.title}
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={item.pictureUrl}
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
                  {item.price ? item.price : "Consultar precio"}
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Agregar al carro
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex item-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
