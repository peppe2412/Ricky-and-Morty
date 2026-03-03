import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleEposide } from "../../api/apiRickyAndMorty";
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
      <h1>{singleEpisode.name}</h1>
    </>
  );
}
