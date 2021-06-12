import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore } from "../../Firebase";
import "./OrderDetail.css";

const OrderDetail = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { success } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const ordersdivlection = db.collection("orders");
    const orderDetail = ordersdivlection.doc(orderId);
    setLoading(true);
    orderDetail
      .get()
      .then((doc) => {
        if (!doc.exists) {
          setLoading(false);
          setError(true);
          setErrorMessage("Ups! Parece que la orden que buscas no existe");
        } else {
          setOrder({ id: doc.id, ...doc.data() });
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        setErrorMessage(
          "Ups! Parece que hubo un error. Intenta recargar la página"
        );
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orderId]);

  const formatNumber = (numero) => {
    return new Intl.NumberFormat().format(numero);
  };
  return (
    <div className="mt-4 order-detail">
      {loading ? (
        <span>cargando..</span>
      ) : error ? (
        <div>
          <Link to="/">
            <span className="btn btn-secondary my-3">Volver al inicio</span>
          </Link>
          <div className="d-flex justify-content-center ">
            <p>{errorMessage}</p>
          </div>
        </div>
      ) : (
        <div className="container mx-auto">
          {order && (
            <>
              {success && (
                <>
                <div>
                  <h1 className="text-lg my-4">
                  Número de orden: <strong>{order.id}</strong>
                  </h1>
                </div>
                  <div className="bg-indigo-700 px-4 py-5 border-b rounded-t sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      Información de entrega
                    </h3>
                  </div>
                  <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                      <li>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p>
                              {" "}
                              <strong> Nombre: </strong>{" "}
                            </p>
                            <div className="ml-2 flex-shrink-0 flex">
                              <p> {order.buyer.name}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p>
                              <strong> Teléfono: </strong>{" "}
                            </p>
                            <div className="ml-2 flex-shrink-0 flex">
                              <a href={"tel:" + order.buyer.phone}>
                                {order.buyer.phone}
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p>
                              <strong> Dirección: </strong>
                            </p>
                            <div className="ml-2 flex-shrink-0 flex">
                              <p> {order.buyer.address}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p>
                              <strong> Estado: </strong>
                            </p>
                            <div className="ml-2 flex-shrink-0 flex">
                              <p className="text-center mt-4">
                                {order.delivered ? (
                                  <span className="bg-green-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1">
                                    Entregado
                                  </span>
                                ) : (
                                  <span className="bg-blueGray-500 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1">
                                    No entregado
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              <>
                <div className="bg-indigo-700 px-4 py-5 border-b rounded-t sm:px-6 mt-5 flex justify-between item-center">
                  <h3 className="text-lg leading-6 font-medium text-white">
                    Orden de compra
                  </h3>
                  <h3 class="text-white">
                    Fecha de creación:{" "}
                    {order.date.toDate().toLocaleDateString()}
                  </h3>
                </div>
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {order.items.map((item) => {
                      return (
                        <li key={item.product}>
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <div className="ml-2 flex">
                                <img src={item.image} alt={item.title} />

                                <div className="flex flex-col ml-4">
                                  <h3 className="text-lg text-gray-500">{item.title}</h3>
                                  <p className="text-sm text-gray-400">
                                  {item.quantity} x {item.price} = $
                                  {formatNumber(item.quantity * item.price)}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <Link to={`/product/${item.id}`}>
                                  <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    Volver a comprar
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                    <li>
                      <h3 className="text-right m-5">
                        TOTAL: ${formatNumber(order.total)}
                      </h3>
                    </li>
                  </ul>
                </div>
              </>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
