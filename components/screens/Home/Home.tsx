import dynamic from "next/dynamic"

import Heading from "@/ui/Heading/Heading"
import SubHeading from "@/ui/Heading/SubHeading"

import { getHomeData } from "./getHomeData"
import SkeletonLoader from "@/ui/SkeletonLoader"

const DynamicSlider = dynamic(() => import('@/ui/Slider'), {
  ssr: false,
})

const DynamicGallery = dynamic(() => import('@/ui/Gallery'), {
  ssr: false,
})

const Home = async () => {
  const data = await getHomeData()
  return (
    <>
      <Heading
        title="Watch movies online"
        className="text-gray-300 mb-8 text-xl"
      />
      {data?.slides.length ? <DynamicSlider slides={data.slides} /> : <SkeletonLoader count={1} className="h-80" />}

      <section className="py-5">
        <SubHeading title="Trending" />
        {
          data?.trendingMovies.length ?
            <DynamicGallery items={data.trendingMovies} /> :
            <SkeletonLoader count={1} className="h-56" />
        }
      </section>
      <section className="py-5">
        <SubHeading title="Actors" />
        {
          data?.actors.length ?
            <DynamicGallery items={data.actors} /> :
            <SkeletonLoader count={1} className="h-56" />
        }
      </section>
    </>
  )
}



export default Home