import { useState, useEffect } from "react";
import { getEpisodes } from "../../../api/apiRickyAndMorty";
import { Link } from "react-router";
import Loader from "../../Loader/Loader";

export default function GetEpisodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        const data = await getEpisodes();
        setEpisodes(data);
        setLoader(false);
      } catch (error) {
        console.error("Errore: " + error);
        setError(true);
      }
    };
    loadEpisodes();
  }, []);

  if (loader) return <Loader />;
  if (error) return <span>Si è verificato un errore!</span>;

  return (
    <>
      <div className="grid grid-cols-12">
        {episodes.map((episode) => (
          <Link className="lg:col-span-6 col-span-12 mb-5 px-5" key={episode.id} to={`/episode/${episode.id}`}>
            <div className="card card-side bg-base-100 shadow-lg hover:text-rick-and-morty">
              <div className="card-body">
                <h2 className="card-title">{episode.name}</h2>
                <p>{episode.episode}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
