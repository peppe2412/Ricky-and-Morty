import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar bg-base-100 shadow-sm">
          <div className="flex-1 p-2">
            <object
              className="w-36"
              data="/ricky and morty.svg"
              type="image/svg+xml"
            >
              Ricky and Morty
            </object>
          </div>
          <div className="flex-none">
            <ul className="px-7 flex gap-4">
              <li>
                <NavLink to={"/"} className="text-xl font-semibold link link-hover">Home</NavLink>
              </li>
              <div className="bg-gray-700 w-0.5 rotate-10"></div>
              <li>
                <NavLink to={"/episodes"} className="text-xl font-semibold link link-hover">Episodi</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
