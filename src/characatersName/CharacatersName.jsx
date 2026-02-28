import { useState, useEffect } from "react";
import getCharacter from "../api/apiRickyAndMorty";

export default function CharacterName() {
  const [characterName, setCharacterName] = useState([]);

  useEffect(() => {
    const loadName = async () => {
      try {
        const data = await getCharacter();
        setCharacterName(data);
      } catch (error) {
        console.error("Errore: " + error);
      }
    };

    loadName();
  }, []);

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
