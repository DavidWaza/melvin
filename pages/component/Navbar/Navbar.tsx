// Navbar.js
import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-5 uppercase relative z-50">
      <div className="group">
          <button className=" px-3 py-1 flex items-center min-w-32">
            <span className="pr-1 font-semibold flex-1 uppercase">Products for none-residents</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
          >
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
              For investors
            </li>
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">for representative officers</li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1 uppercase">for grantors</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-3 py-1 hover:bg-gray-100">How to become a user</li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1 uppercase">Escrow Account</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="group">
          <button className=" px-3 py-1 flex items-center min-w-32">
            <span className="pr-1 font-semibold flex-1 uppercase">Contacts</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
        </div>
        <div className="group">
          <button className=" px-3 py-1 flex items-center min-w-32">
            <span className="pr-1 font-semibold flex-1 uppercase">Online bank</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
