import React from 'react'
import { NextPage } from 'next'

import Favorites from '@/components/screens/Favorites'

const FavoritePage: () => Promise<JSX.Element> = async () => {
    return (
        <Favorites />
    )
}

export default FavoritePage