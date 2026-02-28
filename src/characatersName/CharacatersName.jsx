import { useState, useEffect } from "react";
import getCharacter from "../api/apiRickyAndMorty";
import Loader from "../Loader/Loader";

export default function CharacterName() {
  const [characterName, setCharacterName] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const loadName = async () => {
      try {
        const data = await getCharacter();
        setCharacterName(data);
        setLoader(false);
      } catch (error) {
        console.error("Errore: " + error);
        return <span>Si è verificato un errore!</span>;
      }
    };

    loadName();
  }, []);

  if (loader) return <Loader />;

  return (
    <>
      {characterName.map((character) => (
        <div key={character.id} className="text-xl mb-7 p-7">
          <ul>
            <li>
              {character.name}
              <div>{character.status}</div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
