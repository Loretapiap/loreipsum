import React, { useState, useEffect } from "react";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
  const [item, setitem] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      const product = {
        id: "41323124",
        title: "Sitial Kas",
        description: "Sitial gris de tela y madera nativa",
        price: "29000",
        category: "sofas-y-bergeres",
        stock: 3,
        pictureUrl:
          "https://sodimac.scene7.com/is/image/SodimacCL/8711852?fmt=jpg&fit=fit,1&wid=420&hei=420",
      };
      setTimeout(() => {
        resolve(product);
      }, 2000);
    });

    task.then(
      (res) => {
        setitem(res);
        setisLoading(false);
      },
      (reject) => {
        console.log("Un error a ocurrido :(");
      }
    );
  }, []);
  if (isLoading === true) {
    return (
      <>
        <div className="my-40 flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        </div>
      </>
    );
  } else {
    return (
     <ItemDetail item={item} setitem={setitem} />
    );
  }
};

export default ItemDetailContainer;
