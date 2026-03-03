import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getCharacter } from "../../../api/apiRickyAndMorty";
import Loader from "../../Loader/Loader";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const data = await getCharacter();
        setCharacters(data);
        setLoader(false);
      } catch (error) {
        console.error("Errore: " + error);
        setError(true);
      }
    };

    loadCharacter();
  }, []);

  if (loader) return <Loader />;
  if (error) return <span>Si è verificato un errore!</span>;

  return (
    <>
      {characters.map((character) => (
        <Link key={character.id} to={`/character/${character.id}`}>
          <div className="card card-side bg-base-100 shadow-sm">
            <figure>
              <img src={character.image} alt={character.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{character.name}</h2>
              <small>Status: {character.status}</small>
              <small>Specie: {character.species}</small>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
