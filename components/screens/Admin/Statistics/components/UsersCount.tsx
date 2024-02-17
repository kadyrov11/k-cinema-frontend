import { FC } from 'react'
import { useQuery } from 'react-query'

import { AdminService } from '@/services/admin.service'

import styles from '../../Admin.module.scss'

const UsersCount: FC = () => {
    const { data: res } = useQuery('Count users', () => AdminService.getUsersCount())
    return (
        <div className={`${styles.block} ${styles.usersCount}`}>
            <p className={styles.number}>
                {res?.data?.usersCount}
                <p className={styles.description}>users</p>
            </p>
        </div>
    )
}

export default UsersCount

// const UsersCount: FC = () => {
// const { isLoading, data: res } = useQuery('Count users', () => AdminService.getUsersCount())
//     return <div className={``}>
//         <div>
//             {isLoading ? <SkeletonLoader /> : <p className={styles.number}>
//                 {res?.data}
//                 <span className={styles.description}>users</span>
//             </p>}
//         </div>
//     </div>
// }

