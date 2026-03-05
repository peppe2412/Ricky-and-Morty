import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getCharacter } from "../../../api/apiRickyAndMorty";
import Loader from "../../Loader/Loader";
import "./Characters.css";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [gendersFilter, setGendersFilter] = useState("");
  const [viewContent, setViewContent] = useState(4);

  const reset = () => {
    (setStatusFilter(""), setSpeciesFilter(""), setGendersFilter(""));
  };

  const showMore = () => {
    setViewContent((more) => more + 4);
  };

  useEffect(() => {
    const loadCharacter = async () => {
      setLoader(true);
      try {
        const data = await getCharacter(
          statusFilter,
          speciesFilter,
          gendersFilter,
        );
        setCharacters(data);
        setLoader(false);
      } catch (error) {
        console.error("Errore: " + error);
        setError(true);
      }
    };

    loadCharacter();
  }, [statusFilter, speciesFilter, gendersFilter]);

  if (loader) return <Loader />;
  if (error) return <span>Si è verificato un errore!</span>;

  return (
    <>
      <section className="mt-8 p-2 mb-7 flex lg:justify-end justify-center">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="buttons-filter">
            Filtra
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm w-fit"
          >
            <li>
              {(statusFilter !== "" ||
                speciesFilter !== "" ||
                gendersFilter !== "") && (
                <button onClick={reset} className="cursor-pointer">
                  Reset
                </button>
              )}
            </li>
            <div>
              <small className="text-gray-400">Status</small>
            </div>
            <li>
              <button
                onClick={() => setStatusFilter("alive")}
                className="cursor-pointer"
              >
                Alive
              </button>
            </li>
            <li>
              <button
                onClick={() => setStatusFilter("dead")}
                className="cursor-pointer"
              >
                Dead
              </button>
            </li>
            <div>
              <small className="text-gray-400">Specie</small>
            </div>
            <li>
              <button
                onClick={() => setSpeciesFilter("human")}
                className="cursor-pointer"
              >
                Human
              </button>
            </li>
            <li>
              <button
                onClick={() => setSpeciesFilter("alien")}
                className="cursor-pointer"
              >
                Alien
              </button>
            </li>
            <div>
              <small className="text-gray-400">Gender</small>
            </div>
            <li>
              <button
                onClick={() => setGendersFilter("male")}
                className="cursor-pointer"
              >
                Maschio
              </button>
            </li>
            <li>
              <button
                onClick={() => setGendersFilter("female")}
                className="cursor-pointer"
              >
                Femmina
              </button>
            </li>
          </ul>
        </div>
      </section>

      <div className="grid grid-cols-12">
        {characters.slice(0, viewContent).map((character) => (
          <Link
            className="lg:col-span-6 col-span-12 mb-5 px-5"
            key={character.id}
            to={`/character/${character.id}`}
          >
            <div
              data-aos="fade-right"
              className="card shadow-lg card-side bg-base-100 hover:text-rick-and-morty"
            >
              <figure>
                <img src={character.image} alt={character.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{character.name}</h2>
                <small>Status: {character.status}</small>
                <small>Specie: {character.species}</small>
                <small>Genere: {character.gender}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {viewContent < characters.length && (
        <div className="flex justify-center py-10">
          <button className="btn btn-outline btn-ghost" onClick={showMore}>
            Mostra di più
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
