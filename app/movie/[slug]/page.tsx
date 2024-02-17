import { NextPage } from 'next'

import Movie from '@/components/screens/Movie'

import NotFoundPage from 'app/not-found'

type ActorPageType = ({ params: { slug } }: { params: { slug: string; }; }) => JSX.Element

const ActorPage: ActorPageType = ({ params: { slug } }) => {
    return slug ? <Movie slug={slug} /> : <NotFoundPage />
}

export default ActorPage