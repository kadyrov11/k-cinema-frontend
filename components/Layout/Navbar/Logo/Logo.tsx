import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/assets/images/logo.svg'

const Logo: FC = () => {
  return (
    <Link href='/' className='flex mb-10 px-layout flex-nowrap'>
      <Image src={logoImg} alt='Online Cinema' width={30} height={34} draggable={false} />
      <h1 className='ml-4 text-2xl font-bold'>K-CINEMA</h1>
    </Link>
  )
}

export default Logo