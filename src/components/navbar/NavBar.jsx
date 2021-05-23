import React, { useState, useEffect } from "react";
import Brand from "./logo.png";
import Cart from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { getFirestore } from "../../Firebase";
import "./navcss.css";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = db.collection("categories");
    categoriesCollection.get().then((querySnapshot) => {
      if (querySnapshot.length === 0) {
        console.log("No hay categorias");
      } else {
        setCategories(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    });
  }, []);
  return (
    <>
      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-white text-gray-900 shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to={"/"}
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
              href="#home"
            >
              <img src={Brand} className="logo" alt="logo loreipsum" />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center " +
              (navbarOpen ? "flex" : "hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {categories.map((category) => (
                <li className="nav-item" key={category.id}>
                  <NavLink
                    to={`/category/${category.slug}`}
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div
              className="order-2 md:order-3 flex items-center"
              id="nav-content"
            >
              <Cart />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
