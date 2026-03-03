import { useEffect } from "react";
import Characters from "../../components/Cards/characaters/Characaters";
import Heading from "./components/Heading/Heading";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <Heading />

      <section className="flex mt-4 justify-center flex-col items-center">
        <div className="">
          <Characters />
        </div>
      </section>
    </>
  );
}
