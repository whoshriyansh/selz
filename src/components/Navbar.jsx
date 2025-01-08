import React from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="navbar w-full shadow">
      <div className="navbar py-0 rounded-box flex w-full items-center justify-between gap-2 container mx-auto">
        <div className="navbar-start max-md:w-1/4">
          <a href="#" aria-label="Homepage Link">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
                fill="oklch(var(--p))"
              />
            </svg>
          </a>
        </div>
        <div className="navbar-center max-md:hidden">
          <ul className="menu menu-horizontal p-0 font-medium">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end items-center gap-4">
          <div className="dropdown relative inline-flex md:hidden rtl:[--placement:bottom-end]">
            <button
              id="dropdown-default"
              type="button"
              className="dropdown-toggle btn btn-text btn-secondary btn-square"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
              <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
            </button>
            <ul
              className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-default"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Link 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Link 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
          <a
            className="btn max-md:btn-square btn-gradient btn-primary waves waves-light"
            href="#"
          >
            <span className="max-md:hidden">Login</span>
            <span className="icon-[line-md--login] size-5"></span>
          </a>
          <a
            className="btn btn-gradient btn-primary waves waves-light relative"
            href="#"
          >
            <span href="#" className="icon-[mdi--cart] size-8 mr-1"></span>
            <span className="badge bg-white text-primary font-extrabold size-4 absolute right-0 top-0">
              {cartItems.length}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
