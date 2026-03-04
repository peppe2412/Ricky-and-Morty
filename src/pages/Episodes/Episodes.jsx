import GetEpisodes from "../../components/Cards/Episodes/GetEpisodes";

export default function Episodes() {
  return (
    <>
      <section className="mt-7 flex justify-center flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-16">Episodi</h1>
        <GetEpisodes />
      </section>
    </>
  );
}
