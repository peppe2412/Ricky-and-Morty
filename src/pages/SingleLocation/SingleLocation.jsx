import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getSingleLocation } from "../../api/apiRickyAndMorty";
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

  return <h1>{singleLocation.name}</h1>
}
