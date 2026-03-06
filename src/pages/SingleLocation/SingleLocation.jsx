import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getSingleLocation } from "../../api/apiRickyAndMorty";
import { getIdUrl } from "../../api/apiRickyAndMorty";
import { Link } from "react-router";
import Loader from "../../components/Loader/Loader";

export default function SingleLocation() {
  const { id } = useParams();
  const [singleLocation, setSingleLocation] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadSingleLocation = async () => {
      try {
        const data = await getSingleLocation(id);
        setSingleLocation(data);
        setLoader(false);
      } catch (error) {
        console.error("Errore: " + error);
        setError(true);
      }
    };
    loadSingleLocation();
  }, [id]);
  if (loader) return <Loader />;
  if (error) return <span>Si è verificato un errore!</span>;

  return (
    <>
      <section className="mt-5 p-5">
        <h1 className="lg:text-5xl text-3xl lg:text-left text-center">
          {singleLocation.name}
        </h1>
        <div className="mt-10">
          <ul className="flex flex-col gap-3 lg:text-lg">
            <li>
              <strong>Tipo di pianeta:</strong> {singleLocation.type}
            </li>
            <li>
              <strong>Dimensioni:</strong> {singleLocation.dimension}
            </li>
            <li>
              <strong>Residenti:</strong>{" "}
              {singleLocation.residents.map((character) => {
                const characterId = getIdUrl(character);

                return (
                  <Link
                    className="text-sky-400 block mb-3 mt-3 underline hover:text-rick-and-morty"
                    to={`/character/${characterId}`}
                    key={characterId}
                  >
                    Personaggio #{characterId}
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
