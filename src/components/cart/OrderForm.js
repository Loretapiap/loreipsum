import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { getFirestore } from "../../Firebase";
import { useCartContext } from "../../context/CartContext";

const OrderForm = ({ cart }) => {
  const history = useHistory();
  const { clearCart } = useCartContext();
  const [error, setError] = useState(false);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [emailCheck, setEmailCheck] = useState("");

  const handleInput = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const db = getFirestore();
    const ordersCollection = db.collection("orders");

    setError(false);

    if (!buyer.name || !buyer.phone || !buyer.email || !buyer.address) {
      setError("Completa los datos");
    } else if (buyer.email !== emailCheck) {
      setError("El email no coincide");
    } else {
      const newOrder = {
        buyer,
        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.qty,
          image: item.pictureUrl,
        })),
        date: firebase.firestore.FieldValue.serverTimestamp(),
        total: cart.totalPrice,
        delivered: false,
      };
      try {
        const doc = await ordersCollection.add(newOrder);

        const itemsInCart = await db
          .collection("items")
          .where(
            firebase.firestore.FieldPath.documentId(),
            "in",
            cart.map((c) => c.id)
          )
          .get();

        itemsInCart.docs.forEach((doc) => {
          const item = cart.find((item) => doc.id === item.id);
          doc.ref.update({ stock: doc.data().stock - item.qty });
        });

        history.push(`/order/${doc.id}/success`);
        clearCart();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const formatNumber = (numero) => {
    return new Intl.NumberFormat().format(numero);
  };

  return (
    <ul>
      {error && (
        <div role="alert">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Un error ha ocurrido
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{error}</p>
          </div>
        </div>
      )}
      <form onSubmit={submitHandler}>
        <li>
          <div className="grid grid-cols-1 mt-5 mx-7">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Nombre
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              value={buyer.name}
              onChange={handleInput}
            />
          </div>
          <div className="grid grid-cols-1 mt-5 mx-7">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Número de teléfono
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="number"
              name="phone"
              placeholder="Ingresa tu número de teléfono"
              value={buyer.phone}
              onChange={handleInput}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div className="grid grid-cols-1">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Email
              </label>
              <input
                className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                value={buyer.email}
                onChange={handleInput}
              />
            </div>
            <div className="grid grid-cols-1">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Confirma tu Email
              </label>
              <input
                className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="email"
                name="emailCheck"
                placeholder="Ingresa nuevamente tu correo electrónico"
                value={buyer.emailCheck}
                onChange={(e) => setEmailCheck(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 mt-5 mx-7">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Dirección
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              name="address"
              placeholder="Ingresa tu dirección"
              value={buyer.address}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col items-end my-5 pr-5">
            <h4>
              Total de productos:{" "}
              <strong>{cart.reduce((acc, item) => acc + item.qty, 0)}</strong>
            </h4>
            <h4>
              Total: $
              <strong>
                {cart.totalItems
                  ? formatNumber(cart.totalItems)
                  : "Sin información"}
              </strong>
            </h4>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
            <button
              className="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
              disabled={cart.length === 0}
            >
              Comprar
            </button>
          </div>
        </li>
      </form>
    </ul>
  );
};

export default OrderForm;
