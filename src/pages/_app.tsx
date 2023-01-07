import * as S from '../styles/global'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../public/triade.png'


export type AppTypes = {
  logoOpacity?: Number,
}

export default function App({ Component, pageProps }: AppProps) {
  
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ logoOpacity, setLogoOpacity ] = useState(0.25)

  useEffect(()=>{    
    setTimeout(()=>{
      setIsLoaded(true)
    }, 5000)
  },[])
  return (
    <>
    <Head>
      <title>TRÍADE-GROUP</title>
      <meta name="description" content="TRÍADE GROUP send and receive data to a distributed API" />
      <meta name="msapplication-TileColor" content="#1b0a5f" />
      <meta name="theme-color" content="#1b0a5f" />
      <link rel="icon" href="/favicon.ico" />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      
      
    </Head>
    <S.GlobalStyles />
    {isLoaded?<Component {...pageProps} />
    :
    <S.Float>
      <S.IconWrapper logoOpacity={logoOpacity}>
        <Image
          src={logo}
          alt="triade logo"
          width={300}
          height={300}
        />
      </S.IconWrapper>

    </S.Float>
      }
    </>
  )
}

