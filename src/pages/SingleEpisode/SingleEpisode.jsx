import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getSingleEposide } from "../../api/apiRickyAndMorty";
import { getIdUrl } from "../../api/apiRickyAndMorty";
import Loader from "../../components/Loader/Loader";

export default function SingleEpisode() {
  const { id } = useParams();
  const [singleEpisode, setSingleEpisode] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadSingleEpisode = async () => {
      try {
        const data = await getSingleEposide(id);
        setSingleEpisode(data);
        setLoader(false);
      } catch (error) {
        console.error("Errore: " + error);
        setError(true);
      }
    };
    loadSingleEpisode();
  }, [id]);
  if (loader) return <Loader />;
  if (error) return <span>Si è verificato un errore!</span>;

  return (
    <>
      <section className="mt-5 p-5">
        <h1 className="lg:text-5xl text-3xl lg:text-left text-center">
          {singleEpisode.name}
        </h1>
        <div className="mt-10">
          <ul className="flex flex-col gap-3 lg:text-lg">
            <li>
              <strong>Episodio:</strong> {singleEpisode.episode}
            </li>
            <li>
              <strong>Data rilascio:</strong> {singleEpisode.air_date}
            </li>
            <li>
              <strong className="block">Personaggi:</strong>
              {singleEpisode.characters.map((character) => {
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
