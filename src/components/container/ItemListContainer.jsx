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
          price: "29000",
          category : "sofas-y-bergeres",
          stock: 3,
          pictureUrl:
            "https://sodimac.scene7.com/is/image/SodimacCL/8711852?fmt=jpg&fit=fit,1&wid=420&hei=420",
        },
        {
          id: "156156",
          title: "Máquina de escribir",
          description: "Réplica de máquina de escribir vintage",
          category : "deco-hogar",
          price: "70000",
          stock: 10,
          pictureUrl:
            "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
        },
        {
          id: "326569489",
          title: "Cuadro Aves Chilenas",
          description: "Hermosas Aves de Chile ilustradas por Pilar González.",
          category : "deco-hogar",
          price: "16990",
          stock: 10,
          pictureUrl:
            "https://cdn.shopify.com/s/files/1/1883/3113/products/Cuadro-todas-aves-30x40_2000x.jpg?v=1583616208",
        },
        {
          id: "765543",
          title: "Tabla Selknam",
          description: "Tabla de vidrio inspirada en el pueblo Selk'nam",
          category : "deco-hogar",
          price: "11990",
          like: true,
          stock: 0,
          pictureUrl:
            "https://cdn.shopify.com/s/files/1/1883/3113/products/TABLA-SELKNAM-1_2000x.jpg?v=1618271104",
        },
        {
          id: "6543656",
          title: "Mesa de centro nórdica IOWA",
          description: "Tabla de vidrio inspirada en el pueblo Selk'nam",
          category : "mesas-de-centro",
          price: "11990",
          like: true,
          stock: 0,
          pictureUrl:
            "https://static2.elcontainer.cl/5103-big_default/mesa-de-centro-nordica-iowa.jpg",
        },
        {
          id: "952615",
          title: "Futón sofá cama",
          description: "Diseño minimalista y moderno. Apto para toda la familia, este futón se convierte en una alternativa de alojamiento bastante cómoda.",
          category : "sofas-y-bergeres",
          price: "11990",
          like: true,
          stock: 2,
          pictureUrl:
            "https://static2.elcontainer.cl/14188-big_default/futon-sofa-cama.jpg",
        },
        {
          id: "3255848",
          title: "Mesa de centro Memphis Blanca",
          description: "Medidas: 100*53*42; Material: MDF con cubiertas en melamina y patas de madera solida.",
          category : "mesas-de-centro",
          price: "11990",
          like: true,
          stock: 4,
          pictureUrl:
            "https://static3.elcontainer.cl/14008-big_default/mesa-de-centro-memphis-blanca.jpg",
        },
      ];
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    task.then(
      (res) => {
        setItems(res);
        setisLoading(false);
      },
      (reject) => {
        console.log("Un error a ocurrido :(");
      }
    );
  }, []);
  if(isLoading === true) {
    return (
      <>
      <div className="my-40 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      </div>
      </>
    )
  } else {
    return (
      <ItemList products={items} setproducts={setItems} />
    )
  }
};

export default ItemListContainer;
