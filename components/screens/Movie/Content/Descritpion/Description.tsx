import { FC } from 'react'
import { IDescription } from '../content.interface'

import styles from './Description.module.scss'
import Link from 'next/link'

const Description: FC<IDescription> = ({ links, name }) => {
    return (
        <div className={styles.desc}>
            <p className={styles.name}>{name}</p>
            <div className={styles.links}>{
                links.map((item, idx) => <>
                    <Link href={item.link} key={item.title}>{item.title}</Link>
                    {idx + 1 !== links.length ? "," : ""}
                </>)

            }</div>
        </div>
    )
}

export default Description