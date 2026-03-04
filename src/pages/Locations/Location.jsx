import GetLocations from "../../components/Cards/Locations/GetLocations"

export default function Location(){
    return (
        <section className="flex justify-center items-center flex-col mt-7">
            <h1 className="text-5xl font-extrabold mb-16 text-rick-and-morty">Locations</h1>
            <GetLocations />
        </section>
    )
}