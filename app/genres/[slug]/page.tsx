import Genre from "@/components/screens/Genre"

const GenrePage = ({ params: { slug } }: { params: { slug: string } }) => {
    return (
        <Genre slug={slug} />
    )
}

export default GenrePage