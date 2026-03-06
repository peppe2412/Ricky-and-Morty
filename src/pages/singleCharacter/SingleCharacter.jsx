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

  return (
    <>
      <section className="mt-5 p-5">
        <h1 className="lg:text-5xl text-3xl lg:text-left text-center">{singleChar.name}</h1>
        <div className="lg:flex md:flex block gap-10 mt-10">
          <img
            className="w-125 shadow-sm rounded-2xl"
            src={singleChar.image}
            alt={singleChar.name}
          />
          <div className="mt-10">
            <ul className="flex flex-col gap-3 lg:text-lg">
              <li><strong>Gender:</strong> {singleChar.gender}</li>
              <li><strong>Status:</strong> {singleChar.status}</li>
              <li><strong>Origine:</strong> {singleChar.origin.name}</li>
              <li><strong>Locazione:</strong> {singleChar.location.name}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
