import Typewriter from "../Typewriter/Typewriter";
import "./Heading.css";

export default function Heading() {
  return (
    <section className="w-full relative h-[75vh]">
      <div
        className="slide"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url("https://wallpapercave.com/wp/wp6243893.jpg")`,
        }}
      ></div>
      <div
        className="slide"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url("https://wallpapercave.com/wp/wp14277918.jpg")`,
        }}
      ></div>
      <div
        className="slide"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url("https://wallpapercave.com/wp/wp14277857.jpg")`,
        }}
      ></div>
      <div className="relative w-full h-full items-center flex justify-center">
        <h1 className="lg:text-7xl text-4xl text-center heading-title uppercase">
          <Typewriter text="Rick and Morty" delay={150} />
        </h1>
      </div>
    </section>
  );
}
