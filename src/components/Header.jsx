import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-2 lg:py-4  px-3 lg:px-8 shadow-md">
        <Link
          to={"/"}
          aria-label="Crystal gadgets"
          className="inline-flex items-center "
        >
          <div className=" bg-sky-200 p-4 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="flex-shrink-0 w-5 h-5 rounded-full text-cyan-600"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <span className="text-2xl font-bold px-2">Crystal Gadgets</span>
        </Link>
        <ul className="lg:flex hidden lg:space-x-12  font-semibold">
          <li>
            <NavLink to="/" aria-label="home" title="home">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" aria-label="shop" title="shop">
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" aria-label="cart" title="cart">
              <div className="relative">
                <FontAwesomeIcon
                  className="text-sky-400 text-2xl"
                  icon={faShoppingCart}
                ></FontAwesomeIcon>
                <p className="text-sm bg-sky-600 text-white text-center px-2 rounded-full absolute -top-3 right-3 lg:-top-3 lg:-right-4">
                  2
                </p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" aria-label="about" title="about">
              ABOUT
            </NavLink>
          </li>
        </ul>
        <div className="lg:hidden">
          <FontAwesomeIcon
            className="text-sky-300 text-2xl"
            icon={faBars}
          ></FontAwesomeIcon>
        </div>
      </nav>
    </>
  );
};

export default Header;
