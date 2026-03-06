import GetLocations from "../../components/Cards/Locations/GetLocations"

export default function Location(){
    return (
        <section className="mt-12 lg:block flex justify-center flex-col items-center">
            <h1 className="text-3xl lg:ms-7 font-extrabold mb-10">Locations</h1>
            <GetLocations />
        </section>
    )
}