import { FC } from 'react'
import Image from 'next/image'

import { useUpload } from './useUpload'
import SkeletonLoader from '@/ui/SkeletonLoader'
import { IUploadField } from '../form.interfaces'

import styles from '../form.module.scss'

const UploadField: FC<IUploadField> = ({
    value,
    error,
    style,
    folder,
    onChange,
    placeholder,
    isImage = true,
}) => {
    const { isLoading, uploadFile } = useUpload(onChange, folder)
    return (
        <div className={`${styles.field} ${styles.uploadField}`} style={style}>
            <div className={styles.uploadFlex}>
                <label >
                    <span>{placeholder}</span>
                    <input type="file" onChange={uploadFile} />
                </label>

                {isImage && <div className={styles.uploadImageContainer}>
                    {isLoading ?
                        <SkeletonLoader count={1} className='w-full h-full' /> :
                        value && <Image alt="" src={value} layout='fill' unoptimized />
                    }
                </div>}
            </div>
        </div>
    )
}

export default UploadField