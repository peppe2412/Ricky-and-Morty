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

      <section className="flex p-16 justify-center">
        <Characters />
      </section>
    </>
  );
}
