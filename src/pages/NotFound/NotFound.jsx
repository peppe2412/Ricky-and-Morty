import { Link } from "react-router";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <section className="flex justify-center flex-col items-center p-16">
        <span className="text-8xl mb-10">404</span>
        <h1 className="lg:text-5xl text-2xl text-center mb-10 uppercase">Pagina non trovata!</h1>
        <Link
          className="flex border border-black link-home rounded-lg hover:bg-rick-and-morty hover:border-none hover:text-white transition duration-300 ease-in"
          to={"/"}
        >
          Ritorna alla home
          <span className="lg:ms-2 ms-1">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              strokeWidth="1.4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V18"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </Link>
      </section>
    </>
  );
}
