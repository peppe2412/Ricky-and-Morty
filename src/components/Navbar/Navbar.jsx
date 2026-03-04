import { NavLink } from "react-router";

export default function Navbar() {
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
          <div className="flex-none">
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
                <NavLink className="lg:text-base text-sm font-semibold link link-hover hover:text-rick-and-morty">
                  Locations
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
