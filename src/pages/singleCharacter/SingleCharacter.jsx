import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleCharacter } from "../../api/apiRickyAndMorty";
import Loader from "../../components/Loader/Loader";

export default function SingleCharacter() {
  const { id } = useParams();
  const [singleChar, setSingleChar] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadSingleCharacter = async () => {
      try {
        const data = await getSingleCharacter(id);
        setSingleChar(data);
        setLoader(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };
    loadSingleCharacter();
  }, [id]);

  if (loader) return <Loader />;
  if (error) return <span>Si è verificato un errore!</span>;

  return <h1>{singleChar.name}</h1>
}

