import React from "react";

export default function Footer() {
  return (
    <>
      <div>
        <div className="border-t border-gray-200">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-no-wrap flex-wrap justify-center md:justify-start">
              <input
                className="sm:w-64 w-40 bg-gray-100 rounded sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4"
                placeholder="correo@mail.com"
                type="text"
              />
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Suscribirme
              </button>
              <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
                Suscribete a nuestro newsletter
                <br className="lg:block hidden" />
                y enterate de las últimas novedades
              </p>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-gray-500">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a className="ml-3 text-gray-500">
                <i class="fab fa-twitter"></i>
              </a>
              <a className="ml-3 text-gray-500">
                <i class="fab fa-instagram"></i>
              </a>
              <a className="ml-3 text-gray-500">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </span>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2021 <b>Lore</b>ipsum
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              Ecommerce React + Firebase
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
