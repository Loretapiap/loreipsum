import React, { useState } from "react";

const ItemListContainer = ({ color, greeting }) => {
  const [isActive, setActive] =  useState(false);

  const handleToggle = () => {
    console.log('estoy dentro');
    setActive(!isActive);
  };

  return (
    <>
     <div className={"max-w-screen-lg shadow-2xl rounded-lg mx-auto text-center py-12 lg:my-60 " + (isActive ? "bg-red-300" : "bg-indigo-500")}>
        <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10" style={{color : color}}>
        {greeting}
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md bg-white shadow">
            <button className="text-gray-700 font-bold py-2 px-6" onClick={handleToggle}>
              Genial! 👍
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
