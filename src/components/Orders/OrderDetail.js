import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore } from "../../Firebase";

const OrderDetail = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { success } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const ordersdivlection = db.divlection("orders");
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
    <div className="mt-4">
      {loading ? (
        <span>cargando..</span>
      ) : error ? (
        <div>
          {" "}
          <Link to="/">
            <span className="btn btn-secondary my-3">Atrás</span>
          </Link>
          <div className="d-flex justify-content-center ">
            <p>{errorMessage}</p>
          </div>
        </div>
      ) : (
        <div className="justify-content-center">
          {order && (
            <>
              {success && (
                <div>
                  <ul variant="shadow">
                    <li className="px-2 ">
                      <h3>Información de entrega</h3>
                    </li>
                    <li>
                      <p>
                        <strong> Nombre: </strong>
                        {order.buyer.name}
                      </p>
                      <p>
                        <strong> Teléfono: </strong>
                        {order.buyer.phone}
                      </p>
                      <p>
                        <strong> Dirección: </strong>
                        {order.buyer.address}
                      </p>
                      <p className="text-center mt-4">
                        {order.delivered ? (
                          <span className="border border-success shadow-sm p-2 rounded-lg">
                            Entregado
                          </span>
                        ) : (
                          <span className="border border-danger shadow-sm p-2 rounded-lg">
                            No entregado
                          </span>
                        )}
                      </p>
                    </li>
                  </ul>
                </div>
              )}
              <div>
                <ul variant="flush">
                  <li>
                    <h2>Orden: {orderId}</h2>
                    <h5>
                      Creada el: {order.date.toDate().toLocaleDateString()}
                    </h5>
                  </li>

                  {order.items.map((item) => {
                    return (
                      <li key={item.product}>
                        <div className="align-items-center text-center">
                          <div>
                            <img
                              src={item.image}
                              alt={item.title}
                              fluid
                              rounded
                            />
                          </div>
                          <div>
                            <strong>{item.title}</strong>
                          </div>
                          <div>
                            {item.quantity} x {item.price} = $
                            {formatNumber(item.quantity * item.price)}
                          </div>
                          <div>
                            <Link to={`/item/${item.id}`}>
                              <button className="btn btn-success">
                                {" "}
                                Volver a comprar
                              </button>{" "}
                            </Link>{" "}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  <li>
                    <h3 className="text-center mt-3 ">
                      TOTAL: ${formatNumber(order.total)}
                    </h3>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
