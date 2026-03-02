import { useEffect } from "react";
import Characters from "../../components/characaters/Characaters";
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
      <section className="flex justify-center flex-col items-center">
        <h1 data-aos="zoom-in" className="text-7xl mb-16 font-bold">
          Rick and Morty
        </h1>
        <div className="">
          <Characters />
        </div>
      </section>
    </>
  );
}
