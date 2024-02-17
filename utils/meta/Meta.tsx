import { FC } from 'react'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import NextProgressBar from 'nextjs-progressbar'

import { ISeo } from './meta.interface'
import { onlyText } from '../strings/clearText'
import { siteName, titleMerge } from 'configs/seo.config'

import logoImg from '@/assets/images/logo.svg'
import { accentColor } from 'configs/constants'


const Meta: FC<ISeo> = ({ title, description, image, children }) => {
    const pathname = usePathname()
    const currentUrl = `${process.env.SERVER_URL}/${pathname}`

    return (
        <>
            <NextProgressBar
                color={accentColor}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Head>
                <title itemProp='headline'>{titleMerge(title)}</title>
                {description ? (
                    <>
                        <title itemProp='headline'>{titleMerge(title)}</title>
                        <meta
                            itemProp='description'
                            name='description'
                            content={onlyText(description, 152)}
                        />
                        <link rel='canonical' href={currentUrl} />
                        <meta property='og:locale' content='en' />
                        <meta property='og:title' content={titleMerge(title)} />
                        <meta property='og:url' content={currentUrl} />
                        <meta property='og:image' content={image || logoImg} />
                        <meta property='og:site_name' content={siteName} />
                        <meta
                            property='og:description'
                            content={onlyText(description, 197)}
                        />
                    </>
                ) : <meta name='robots' content='noindex, nofollow' />}
            </Head>
            {children}
        </>
    )
}

export default Meta