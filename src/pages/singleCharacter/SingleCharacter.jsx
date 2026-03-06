import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getSingleCharacter } from "../../api/apiRickyAndMorty";
import { getIdUrl } from "../../api/apiRickyAndMorty";
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
  if (error || !singleChar) return <span>Si è verificato un errore!</span>;

  const originId = getIdUrl(singleChar.origin.url);
  const locationId = getIdUrl(singleChar.location.url);

  return (
    <>
      <section className="mt-5 p-5">
        <h1 className="lg:text-5xl text-3xl lg:text-left text-center">
          {singleChar.name}
        </h1>
        <div className="lg:flex md:flex block gap-10 mt-10">
          <img
            className="w-125 shadow-sm rounded-2xl"
            src={singleChar.image}
            alt={singleChar.name}
          />
          <div className="mt-10">
            <ul className="flex flex-col gap-3 lg:text-lg">
              <li>
                <strong>Gender:</strong> {singleChar.gender}
              </li>
              <li>
                <strong>Status:</strong> {singleChar.status}
              </li>
              <li>
                <strong>Origine:</strong>{" "}
                {originId ? (
                  <Link
                    className="text-sky-400 underline hover:text-rick-and-morty"
                    to={`/location/${originId}`}
                  >
                    {singleChar.origin.name}
                  </Link>
                ) : (
                  singleChar.origin.name
                )}
              </li>
              <li>
                <strong>Locazione:</strong>{" "}
                {locationId ? (
                  <Link
                    className="text-sky-400 underline hover:text-rick-and-morty"
                    to={`/location/${locationId}`}
                  >
                    {singleChar.location.name}
                  </Link>
                ) : (
                  singleChar.location.name
                )}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
