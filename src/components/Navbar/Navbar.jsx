import { NavLink } from "react-router";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  window.addEventListener("resize", closeSidebar);

  return (
    <>
      <header className="container">
        <nav className="navbar bg-base-100 shadow-sm">
          <div className="flex-1 p-2">
            <object
              className="lg:w-36 w-20"
              data="/ricky and morty.svg"
              type="image/svg+xml"
            >
              Ricky and Morty
            </object>
          </div>
          <div className="lg:hidden flex">
            <button onClick={openSidebar}>
              <svg
                width="34px"
                height="34px"
                strokeWidth="1.4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#363535"
              >
                <path
                  d="M3 5H21"
                  stroke="#363535"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M3 12H21"
                  stroke="#363535"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 19H21"
                  stroke="#363535"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="lg:flex hidden">
            <ul className="px-7 flex gap-4">
              <li>
                <NavLink
                  to={"/"}
                  className="lg:text-base text-sm font-semibold link link-hover hover:text-rick-and-morty"
                >
                  Home
                </NavLink>
              </li>
              <div className="bg-gray-700 lg:w-0.5 w-px rotate-10"></div>
              <li>
                <NavLink
                  to={"/episodes"}
                  className="lg:text-base text-sm font-semibold link link-hover hover:text-rick-and-morty"
                >
                  Episodi
                </NavLink>
              </li>
              <div className="bg-gray-700 lg:w-0.5 w-px rotate-10"></div>
              <li>
                <NavLink
                  to={"/locations"}
                  className="lg:text-base text-sm font-semibold link link-hover hover:text-rick-and-morty"
                >
                  Locations
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Sidebar */}
        {isOpen && (
          <div id="overlay" className="bg-black/50 inset-0 z-1 fixed"></div>
        )}
        <aside
          className={`fixed p-5 w-48 bg-base-100 h-full z-1 lg:hidden top-0 right-0 ${isOpen ? "open" : ""}`}
        >
          <div className="flex justify-end">
            <button onClick={closeSidebar}>
              <svg
                width="45px"
                height="45px"
                strokeWidth="1.4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#363535"
              >
                <path
                  d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                  stroke="#363535"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mt-16">
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink
                  onClick={closeSidebar}
                  to={"/"}
                  className="text-xl font-semibold link link-hover hover:text-rick-and-morty"
                >
                  Home
                </NavLink>
              </li>
              <div className="bg-gray-700 lg:w-0.5 w-px rotate-10"></div>
              <li>
                <NavLink
                  onClick={closeSidebar}
                  to={"/episodes"}
                  className="text-xl font-semibold link link-hover hover:text-rick-and-morty"
                >
                  Episodi
                </NavLink>
              </li>
              <div className="bg-gray-700 lg:w-0.5 w-px rotate-10"></div>
              <li>
                <NavLink
                  onClick={closeSidebar}
                  to={"/locations"}
                  className="text-xl font-semibold link link-hover hover:text-rick-and-morty"
                >
                  Locations
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
      </header>
    </>
  );
}
