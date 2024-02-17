import { FC } from 'react'

const NotAuth: FC = () => {
    return (
        <div className='mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80'>
            Please sign in to see favorites.
        </div>
    )
}

export default NotAuth