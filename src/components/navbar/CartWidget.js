import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { createPopper } from "@popperjs/core";
import "./cart.css";

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");
  const { cart, removeItem } = useCartContext();
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "cart-label no-outline " +
                bgColor +
                (cart.length > 0 ? " show" : " hide")
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3 text-white">
                {cart.length > 0 &&
                  cart.reduce((acc, item) => acc + item.qty, 0)}
              </span>
              <svg
                className="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg>
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <div className="cart-container">
                <div className="shopping-cart">
                  {cart.length > 0 && (
                    <>
                      <ul className="shopping-cart-items">
                        {cart.map((cartItem) => {
                          return (
                            <li
                              className="clearfix flex items-start"
                              key={cartItem.id}
                            >
                              <Link to={`/product/${cartItem.id}`}>
                                <img
                                  alt="loreipsum product"
                                  className="product-cart"
                                  src={
                                    cartItem.image
                                      ? cartItem.image
                                      : "https://picsum.photos/200"
                                  }
                                />
                              </Link>
                              <div className="flex-grow">
                                <Link
                                  className="item-name"
                                  to={`/product/${cartItem.id}`}
                                >
                                  {cartItem.title}
                                </Link>
                                <span className="item-price">
                                  ${cartItem.price}
                                </span>
                                <span className="item-quantity">
                                  Cantidad: {cartItem.qty}
                                </span>
                              </div>
                              <div
                                onClick={() => {
                                  removeItem(cartItem.id);
                                }}
                                className="font-bold text-red-500"
                              >
                                <i className="fa fa-times"></i>
                              </div>
                            </li>
                          );
                        })}
                      </ul>

                      <Link to={"/cart"} className="button">
                        Checkout
                      </Link>
                    </>
                  )}
                  {cart.length === 0 && (
                    <>
                      <p className="text-gray-500 text-center">
                        Sin items en el carro
                      </p>
                      <Link to={"/"} className="button">
                        Explorar
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}
