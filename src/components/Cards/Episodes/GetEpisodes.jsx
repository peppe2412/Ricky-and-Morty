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
      {episodes.map((episode) => (
        <Link key={episode.id} to={`/episode/${episode.id}`}>
          <div className="card card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{episode.name}</h2>
              <p>{episode.episode}</p>
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
