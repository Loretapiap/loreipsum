import React, { useState, useEffect } from "react";
import ItemList from "./items/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      const products = [
        {
          id: "41323124",
          title: "Sitial Kas",
          description: "Sitial gris de tela y madera nativa",
          price: "$29000",
          pictureUrl:
            "https://sodimac.scene7.com/is/image/SodimacCL/8711852?fmt=jpg&fit=fit,1&wid=420&hei=420",
        },
        {
          id: "156156",
          title: "Máquina de escribir",
          description: "Réplica de máquina de escribir vintage",
          price: "$70000",
          pictureUrl:
            "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
        },
        {
          id: "326569489",
          title: "Cuadro Aves Chilenas",
          description: "Hermosas Aves de Chile ilustradas por Pilar González.",
          price: "$16990",
          pictureUrl:
            "https://cdn.shopify.com/s/files/1/1883/3113/products/Cuadro-todas-aves-30x40_2000x.jpg?v=1583616208",
        },
        {
          id: "765543",
          title: "Tabla Selknam",
          description: "Tabla de vidrio inspirada en el pueblo Selk'nam",
          price: "$11990",
          pictureUrl:
            "https://cdn.shopify.com/s/files/1/1883/3113/products/TABLA-SELKNAM-1_2000x.jpg?v=1618271104",
        },
      ];
      setTimeout(() => {
        resolve(products);
        setisLoading(false);
      }, 2000);
    });

    task.then(
      (res) => {
        setItems(res);
      },
      (reject) => {
        console.log("Un error a ocurrido :(");
      }
    );
  }, []);
  if(isLoading == true) {
    return (
      <>
      <div className="my-40 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      </div>
      </>
    )
  } else {
    return (
      <ItemList products={items} />
    )
  }
};

export default ItemListContainer;
