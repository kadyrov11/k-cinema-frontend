import { FC } from 'react'

import Skeleton, { SkeletonProps } from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className = '', ...rest }) => {


    return (
        <Skeleton
            {...rest}
            baseColor='#2f3032'
            highlightColor='#3d3e41'
            className={`rounded-lg ${className}`}
        />

    )
}

export default SkeletonLoader