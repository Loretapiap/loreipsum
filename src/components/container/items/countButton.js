import React, { useState, useEffect } from "react";

const CountButton = ({ added, max }) => {
  const [count, setCount] = useState(0);
  const [isAdded, setisAdded] = useState(added);
  if (!isAdded || count == 0) {
    return (
      <>
        <button
          onClick={() => {
            setisAdded(true);
            setCount(count + 1);
          }}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          disabled={!max || max == 0}
        >
          {max ? 'Agregar al carro' : 'Sin stock'}
        </button>
      </>
    );
  }  else {
    return (
      <div className="flex items-center">
        <button className="p-2" onClick={() => setCount(count - 1)} disabled={count <= 0}>
          <i className="fas fa-minus"></i>
        </button>
        <p>{count}</p>
        <button className="p-2" onClick={() => setCount(count + 1)} disabled={count == max} >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    );
  }
};

export default CountButton;
