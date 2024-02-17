"use client"
import Link from 'next/link'

import Meta from '@/utils/meta/Meta'
import Heading from '@/ui/Heading/Heading'


const NotFoundPage = () => {
    const btnStyles = {
        width: '100px',
        display: 'block',
        margin: '0 auto',
        marginTop: '80px',
        borderRadius: '6px',
        backgroundColor: '#E30B13',
        fontWeight: '500',
        padding: '10px',
    }
    return (
        <Meta title='Page is not Found'>
            <div className='text-center'>
                <Heading title='404 - Page Is Not Found' />
                <Link href='/' style={btnStyles}>
                    Go Home
                </Link>
            </div>
        </Meta>
    )
}

export default NotFoundPage