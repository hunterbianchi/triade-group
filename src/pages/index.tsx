import Image from 'next/image'
import * as I from 'react-icons/fa'
import * as S from '../styles/HomeStyled'
import React, { useEffect } from 'react'
import { useState } from 'react'

import imag from '../space2.jpg'
import TopNotification from '../components/TopNotifications'
import ServicePreview from '../components/ServicePreview'


export type HomeTypes = {
    isTopOpen?: boolean;
    isChromium?: boolean;
}

export default function Home() {
    // const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    
    const [ navigatorName, setNavigatorName ] = useState<string>('')
    const [ isChromium, setIsChromium ] = useState<boolean>(navigatorName==="Chromium")
    
    const [ personality, setPersonality ] = useState<string>('commercial')

    const [ isTopOpen, setIsTopOpen ] = useState<boolean>(false)
    const [ contractList, setContractList ] = useState<Array<any>>([])
    const [ notifictions, setNotifictions ] = useState<Array<any>>([{
        name: "jh"
    }])

    const [ serviceList, setServiceList ] = useState<Array<any>>([{
        type: 'triade-commercial',
        image: '',
        name: 'TRÍADE Registry',
        rating: '173Bi/173Bi',
    }])

    function toggleTop (e:any) {
        e.preventDefault()
        setIsTopOpen(!isTopOpen)
    }

    function getBrowser(){

        const sUsrAg = navigator.userAgent;

        if (sUsrAg.indexOf("Firefox") > -1) {
            setNavigatorName("Mozilla Firefox")
        } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
            setNavigatorName("Samsung Internet")
        } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
            setNavigatorName("Opera")
        } else if (sUsrAg.indexOf("Trident") > -1) {
            setNavigatorName("Microsoft Internet Explorer")
        } else if (sUsrAg.indexOf("Edge") > -1) {
            setNavigatorName("Microsoft Edge")
        } else if (sUsrAg.indexOf("Chrome") > -1) {
            setNavigatorName("Chromium")
        } else if (sUsrAg.indexOf("Safari") > -1) {
            setNavigatorName("Apple Safari")
        } else {
            setNavigatorName("unknown")
        }
    }

    useEffect(()=>{
        getBrowser()
    },[])

    useEffect(()=>{
        setIsChromium(navigatorName==="Chromium")
    },[navigatorName])

	return (
		<S.Wrapper>
			{isChromium && <S.BackgroundContainer>
                <Image
                alt=''
                src={imag}
                quality={100}
                fill
                />
            </S.BackgroundContainer>}
            
            <S.MainWrapper>

            {personality==="commercial" && <>
                <S.TopContainer isTopOpen={isTopOpen} >
                    <TopNotification notifictions={notifictions} toggleTop={toggleTop} isChromium={isChromium} isTopOpen={isTopOpen} />
                </S.TopContainer>

                <S.CenterWrapper isTopOpen={isTopOpen}>

                    <S.MetaverseNameWrapper>
                        <div>
                            {`TAD: 937.2 Bi`}
                        </div>

                        <div>
                            {`TRÍADE Metaverse`}
                        </div>

                        <div style={{color: '#fff', display: 'flex'}}>
                            {"5/5 -"}
                            <div style={{color: '#ff0'}}>
                                <I.FaStar/>
                                <I.FaStar/>
                                <I.FaStar/>
                                <I.FaStar/>
                                <I.FaStar/>
                            </div>
                        </div>
                    </S.MetaverseNameWrapper>

                    <S.FloatWrapper>
                        {serviceList.map((service)=>{
                            return (
                                <ServicePreview key={Math.random()} service={service} isChromium={isChromium} />
                            )
                        })}
                    </S.FloatWrapper>

                    <S.PagWrapper>
                        1 / 5k
                    </S.PagWrapper>

                </S.CenterWrapper>

                <S.FooterWrapper isChromium={isChromium} >
                    {`Footer`}
                </S.FooterWrapper>
                </>
            }


            </S.MainWrapper>

		</S.Wrapper>
	)
}
