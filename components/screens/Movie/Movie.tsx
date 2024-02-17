import dynamic from "next/dynamic"

import Content from "./Content"
import Banner from "@/ui/Banner"
import SubHeading from "@/ui/Heading/SubHeading"

import { getMovieData } from "./getMovieData"

const DynamicPlayer = dynamic(() => import('@/ui/VideoPlayer'), {
    ssr: false,
})
const DynamicGallery = dynamic(() => import('@/ui/Gallery'), {
    ssr: false,
})
const DynamicRating = dynamic(() => import('./Rating'), {
    ssr: false,
})

const Movie = async ({ slug }: { slug: string }) => {
    const { movie, similarMovies } = await getMovieData(slug)
    return (
        <>
            <Banner Content={() => <Content movie={movie} />} image={movie.bigPoster} />
            <DynamicPlayer slug={slug} videoSrc={movie.videoUrl} />
            {similarMovies.length > 0 && <div className="min-w-full mt-12">
                <SubHeading title="Similar Movies" />
                <DynamicGallery items={similarMovies} />
            </div>}
            <DynamicRating id={movie._id} slug={slug} />
        </>
    )
}

export default Movie