import { useState, useEffect } from "react";
import { getLocations } from "../../../api/apiRickyAndMorty";
import { Link } from "react-router";
import Loader from "../../Loader/Loader";

export default function GetLocations() {
  const [locations, setLocations] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await getLocations();
        setLocations(data);
        setLoader(false);
      } catch (error) {
        console.error("Errore: " + error);
        setError(true);
      }
    };

    loadLocations();
  }, []);

  if (loader) return <Loader />;
  if (error) return <span>Si è verificato un errore!</span>;

  return (
    <>
      <div className="grid grid-cols-12">
        {locations.map((location) => (
          <Link
            className="lg:col-span-6 col-span-12 mb-5 px-5"
            key={location.id}
            to={`/location/${location.id}`}
          >
            <div
              className="card shadow-lg card-side bg-base-100 hover:text-rick-and-morty"
            >
              <div className="card-body">
                <h2 className="card-title">{location.name}</h2>
                <small>Type: {location.type}</small>
                <small>Dimensione: {location.dimension}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
