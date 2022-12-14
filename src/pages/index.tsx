import Image from 'next/image'
import * as F from 'react-icons/fa'
import * as S from '../styles/HomeStyled'
import React, { useEffect } from 'react'
import { useState } from 'react'

import imag from '../space2.jpg'
import logo from '../../public/triade.png'
import TopNotification from '../components/TopNotifications'
import ServicePreview from '../components/ServicePreview'
import NewContractForm from '../components/NewContractForm'
import NewBusiness from '../components/NewContractForm/NewBusiness'
import { SHA256 } from 'crypto-js'
import MyBusinessBadger from '../components/MyBusinessBadger'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export type HomeTypes = {
    isTopOpen?: boolean;
    isChromium?: boolean;
}

export default function Home({}) {
    // const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    
    const [ navigatorName, setNavigatorName ] = useState<string>('')

    const [ isChromium, setIsChromium ] = useState<boolean>(navigatorName==="Chromium")


    const [ privateKey, setPrivateKey ] = useState<string>('')
    
    const [ personality, setPersonality ] = useState<string>('commercial')
    
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    
    const [ isTopOpen, setIsTopOpen ] = useState<boolean>(false)
    const [ isDisabledTypeBtn, setIsDisabledTypeBtn ] = useState<boolean>(true)
    
    const [ protocol, setProtocol ] = useState<string>('TAD-01')

    const [ contractGroup, setContractGroup ] = useState<any>({name: protocol==='TAD-01'?"Commercial":"[Group]"})
    const [ contractType, setContractType ] = useState<any>({name: protocol==='TAD-01'?"Business":"[Type]"})

    const [ showGroupOptions, setShowGroupOptions ] = useState<boolean>(false)
    const [ showTypeOptions, setShowTypeOptions ] = useState<boolean>(false)
    const [ showNewContractForm, setShowNewContractForm ] = useState<boolean>(false)
    const [ showMyBusiness, setShowMyBusiness ] = useState<boolean>(false)
    const [ serviceList, setServiceList ] = useState<Array<any>>([])
    const [ myBusinessList, setMyBusinessList ] = useState<Array<any>>([])
    const [ selectedBusiness, setSelectedBusiness ] = useState<any>(myBusinessList[myBusinessList.length-1])

    function openBadger(token?: any){
        if(token){
            setSelectedBusiness(token)
            setShowMyBusiness(true)
        }else{
            setShowMyBusiness(true)
        }
    }
    function closeBadger(){
        setShowMyBusiness(false)
    }
    
    const [ allGroups, setAllGroups ] = useState<Array<any>>([
        {
            name: "Social",
            type: [{
                name: "Society"
            }],
        },
        {
            name: "Commercial",
            type: [{
                name: "Business",
                components: <NewBusiness/>,
                stepsLength: 1,
            }],
        },
        {
            name: "Financial",
            type: [{
                name: "Exchange"
            }],
        }
    ])

    const [ notifictions, setNotifictions ] = useState<Array<any>>([{
        name: "jh"
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


    function openContractForm (){
        setShowNewContractForm(true)
    }


    function closeContractForm (){
        setShowNewContractForm(false)
    }


    const newFormParam = {
        privateKey,
        setPrivateKey,
        openBadger,
        myBusinessList,
        setMyBusinessList,
        baseUrl,
        protocol,
        setIsLoading,
        isChromium,
        setShowGroupOptions,
        setContractGroup,
        setContractType,
        setIsDisabledTypeBtn,
        setShowTypeOptions,
        contractGroup,
        allGroups,
        contractType,
        showGroupOptions,
        showTypeOptions,
        isDisabledTypeBtn,
        closeContractForm,
    }

    const badgerParam = {
        privateKey,
        selectedBusiness,
        closeBadger,
    }

    const notifictionParams = {
        openBadger,
        privateKey,
        myBusinessList,
        isTopOpen,
        toggleTop,
        notifictions,
        isChromium,
    }

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            alert("Your internet connection has dropped out!")
        })
        window.addEventListener("online", ()=>{
            alert("Your internet comes back!")
        })

        getBrowser()
        setIsLoading(false)
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

            {protocol==="TAD-00" && <>{"Test Mode"}</>}
            {protocol==="TAD-01" && <>
                <S.TopContainer isTopOpen={isTopOpen} >
                    <TopNotification {...notifictionParams} toggleTop={toggleTop} isChromium={isChromium} isTopOpen={isTopOpen} />
                </S.TopContainer>

                <S.CenterWrapper isTopOpen={isTopOpen}>

                    <S.MetaverseNameWrapper>
                        <div>
                            {`TAD: 937.2 Bi`}
                        </div>

                        <div>
                            {`TR??ADE Commercial`}
                        </div>

                        <div style={{color: '#fff', display: 'flex'}}>
                            {"5/5 -"}
                            <div style={{color: '#ff0'}}>
                                <F.FaStar/>
                                <F.FaStar/>
                                <F.FaStar/>
                                <F.FaStar/>
                                <F.FaStar/>
                            </div>
                        </div>
                    </S.MetaverseNameWrapper>

                    <S.FloatWrapper>
                        {myBusinessList.map((service)=>{
                            return (
                                <ServicePreview privateKey={privateKey} openBadger={openBadger} key={Math.random()} service={service} isChromium={isChromium} />
                            )
                        })}
                    </S.FloatWrapper>

                    <S.PagWrapper>
                        1 / 5k {`${myBusinessList.length}`}
                    </S.PagWrapper>

                </S.CenterWrapper>

                <S.FooterWrapper isChromium={isChromium} >
                    {myBusinessList.length>0 && <F.FaBuilding onClick={e=>openBadger()}/>}
                </S.FooterWrapper>

                <S.AddContractBtn onClick={openContractForm} ><F.FaPlus/></S.AddContractBtn>

                {showMyBusiness && <S.MyBusinessContainer>
                    <MyBusinessBadger {...badgerParam} />
                </S.MyBusinessContainer>}

                {showNewContractForm && <S.NewContractContainer>
                    <NewContractForm {...newFormParam} />
                </S.NewContractContainer>}
            </>}
            {protocol==="TAD-02" && <>{"You cannot use the protocol 'TAD-02'"}</>}
            {protocol==="TAD-03" && <>{"You cannot use the protocol 'TAD-03'"}</>}

            {protocol==="TAD-10" && <>{"You cannot use the protocol 'TAD-10'"}</>}
            {protocol==="TAD-11" && <>{"You cannot use the protocol 'TAD-11'"}</>}
            {protocol==="TAD-12" && <>{"You cannot use the protocol 'TAD-12'"}</>}
            {protocol==="TAD-13" && <>{"You cannot use the protocol 'TAD-13'"}</>}

            </S.MainWrapper>

            {isLoading && <S.LoadingWrapper>
                <S.IconWrapper>
                    <Image
                    src={logo}
                    alt="triade logo"
                    width={300}
                    height={300}
                    />
                </S.IconWrapper>
            </S.LoadingWrapper>}

		</S.Wrapper>
	)
}
