import ItemCard from "@/ui/ItemCard/ItemCard"
import Catalog from "@/ui/catalog-movies/Catalog"

import { getActorData } from "./getActorData"

const Actor = async ({ slug }: { slug: string }) => {
    const { actor, movies } = await getActorData(slug)
    return (
        <>
            <ItemCard title={actor.name} imgSrc={actor.image} />
            <div className="min-w-full mt-7">
                <Catalog movies={movies} title={`Movies with ${actor.name}`} />
            </div>
        </>
    )
}

export default Actor