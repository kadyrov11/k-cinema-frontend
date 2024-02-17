import Actor from '@/components/screens/Actor'

import NotFoundPage from 'app/not-found'

const ActorPage = ({ params: { slug } }: { params: { slug: string } }) => {
    return slug ? <Actor slug={slug} /> : <NotFoundPage />
}

export default ActorPage