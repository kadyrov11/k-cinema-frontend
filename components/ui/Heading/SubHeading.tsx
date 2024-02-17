import { FC } from 'react'

const SubHeading: FC<{ title: string }> = ({ title }) => {
    return (
        <h3 className='text-white text-xl mb-5 font-semibold bg-transparent'> {title}</h3 >
    )
}

export default SubHeading