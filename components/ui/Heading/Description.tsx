import { FC } from 'react'
import parse from 'html-react-parser'


const Description: FC<{ text: string, className?: string }> = ({ text, className }) => {
    return (
        <div
            className={`text-lg font-light text-white text-opacity-60 ${className}`}
        >
            <p >{parse(text)}</p>
        </div>
    )
}

export default Description