import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clearCart } = useCartContext();
  cart.totalItems = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
  const formatPrice = (number) => {
    return new Intl.NumberFormat().format(number);
  };
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Carro de compras</h1>
            <h2 className="font-semibold text-2xl">
              {cart.length ? cart.length : "0"} Items
            </h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Detalle de producto
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Cantidad
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Precio
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {cart.length > 0 && (
            <>
              {cart.map((cartItem) => {
                return (
                  <div
                    key={cartItem.id}
                    className="flex items-center hover:bg-gray-100 px-6 py-5"
                  >
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <Link to={`/product/${cartItem.id}`}>
                          <img src={cartItem.pictureUrl} />
                        </Link>
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">
                          <Link to={`/product/${cartItem.id}`}>
                            {cartItem.title}
                          </Link>
                        </span>
                        <a
                          onClick={() => {
                            removeItem(cartItem.id);
                          }}
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        >
                          Quitar
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      {cartItem.qty}
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${cartItem.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${cartItem.qty * cartItem.price}
                    </span>
                  </div>
                );
              })}
              <div className="d-flex justify-content-center mt-3">
                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" onClick={clearCart}>
                <i className="far fa-trash-alt"></i> Vaciar carro
                </button>
              </div>
            </>
          )}
          {cart.length === 0 && (
            <>
              <h6 className="text-center text-gray-500 my-16">
                Aún no has agregado productos al carro
              </h6>
            </>
          )}
          <Link
            to={"/"}
            className="flex items-center font-semibold text-indigo-600 text-sm mt-10"
          >
            <i className="fas fa-long-arrow-alt-left mb-0 mr-5"></i> Sigue
            comprando
          </Link>
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Resumen de compra
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items {cart.length ? cart.length : "0"}
            </span>
            <span className="font-semibold text-sm">${cart.totalItems} </span>
          </div>
          <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Despacho</label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Despacho gratis</option>
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Código promocional</label>
              <input type="text" id="promo" placeholder="Ingresa tu código xxxx" className="p-2 text-sm w-full" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Aplicar</button>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total</span>
              <span>${formatPrice(cart.totalItems)}</span>
            </div>
            <button
              disabled={cart.length === 0}
              className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
