import React, { useState } from "react";

const CountButton = ({ stock, initialValue, onAdd, item }) => {
  const [value, setValue] = useState(initialValue);
  const handleSum = () => {
    if (value < stock) {
      setValue(value + 1);
    }
  };
  const handleSubstract = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button className="p-2" onClick={handleSubstract}>
        <i className="fas fa-minus"></i>
      </button>

      <p>{stock > initialValue ? value : stock}</p>

      <button className="p-2" onClick={handleSum}>
        <i className="fas fa-plus"></i>
      </button>

      <button
        onClick={() => {
          if (stock > 0) {
            onAdd(item, value, stock);
            setValue(initialValue);
          }
        }}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >Agregar</button>
    </div>
  );
};
export default CountButton;
