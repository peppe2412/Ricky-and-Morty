import GetEpisodes from "../../components/Cards/Episodes/GetEpisodes";

export default function Episodes() {
  return (
    <>
      <section className="mt-12 lg:block flex justify-center flex-col items-center">
        <h1 className="text-3xl lg:ms-7 font-extrabold mb-10">Episodi</h1>
        <GetEpisodes />
      </section>
    </>
  );
}
