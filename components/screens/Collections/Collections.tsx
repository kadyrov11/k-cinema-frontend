import Heading from '@/ui/Heading/Heading'
import Description from '@/ui/Heading/Description'
import { GenreService } from '@/services/genre.service'

import styles from './Collections.module.scss'
import CollectionItem from './CollectionItem'

type CollectionsType = () => Promise<JSX.Element>

const Collections: CollectionsType = async () => {
    const { data: collections } = await GenreService.getCollections()

    return (
        <section>
            <Heading title='Discovery' />
            <Description text='Choose and enjoy with your genre' />
            <div className={styles.collections}>
                {collections.map(c => <CollectionItem collection={c} key={c._id} />)}
            </div>
        </section>
    )
}

export default Collections