import { SHA256 } from 'crypto-js'
import { useEffect, useRef, useState } from 'react'
import { createKeyPair, getPublicKey, signHash, verifySignature } from '../../../utils/manageKeys'
import * as F from 'react-icons/fa'
import * as M from 'react-icons/md'
import * as S from './NewBusinessStyled'
import Questions from './Questions'

export default function NewBusiness
({
    openBadger,
    myBusinessList,
    setMyBusinessList,
    baseUrl,
    businessImage,
    setBusinessImage,
    setIsLoading,
    setSignature,
    businessName,
    businessService,
    businessCountry,
    businessState,
    businessCity,
    businessNeighbourhood,
    businessStreet,
    businessNumber,
    businessZipCode,
    handleBusinessName,
    setBusinessName,
    setBusinessService,
    handleBusinessCountry,
    handleBusinessState,
    handleBusinessCity,
    handleBusinessNeighbourhood,
    handleBusinessStreet,
    handleBusinessNumber,
    handleBusinessZipCode,
    isChromium,
    fingerprint,
    toAddress,
    handleToAddress,
    amount,
    handleAmount,
    signature,
    privateKey,
    handlePrivateKey,
    closeContractForm
    }: any) {


    const prevBtnRef = useRef(null)
    const nextBtnRef = useRef(null)
    
    const [step, setStep] = useState(0)
    const [isPhysical, setIsPhysical] = useState<boolean>(false)
    const [noPrev, setNoPrev] = useState(step <= 0)
    const [noNext, setNoNext] = useState(false)


    const questionParam = {
        businessImage,
        setBusinessImage,
        isPhysical,
        setIsPhysical,
        businessName,
        businessService,
        businessCountry,
        businessState,
        businessCity,
        businessNeighbourhood,
        businessStreet,
        businessZipCode,
        businessNumber,
        handleBusinessName,
        chooseService,
        handleBusinessCountry,
        handleBusinessState,
        handleBusinessCity,
        handleBusinessNeighbourhood,
        handleBusinessStreet,
        handleBusinessZipCode,
        handleBusinessNumber,
        step,
        isChromium,
        fingerprint,
        toAddress,
        handleToAddress,
        amount,
        handleAmount,
        signature,
        privateKey,
        handlePrivateKey
    }

    function nextStep(e: any) {

        e.preventDefault()

        if(step + 1 <= 4){
            if(step + 1 === 2 && !businessService ){

                setStep(step + 1)
                setNoNext(true)
                return

            }
            setNoPrev(false)
            setStep(step + 1)

        }else {
          setNoNext(true)
        }
    }

    function previousStep(e: any) {

        e.preventDefault()

        if(step - 1 <= 0){
            setStep(step - 1)
            setNoPrev(true)
            setNoNext(false)
        }else{
            setStep(step - 1)
            setNoNext(false)
            setNoPrev(false)
        }
    }

    function chooseService(e: any, service: string){
        e.preventDefault()

        setBusinessService(service)
        setNoNext(false)
    }

    async function createBusines(e: any){
        
        e.preventDefault()

        if(!privateKey){
            alert("\n\tCONTRACT NOT SIGNED!\n\n\tPut you private key to sign this contract.\n\n")
            setIsLoading(false)
        }else{

            setIsLoading(true)

            const businessPair = createKeyPair()

            const token: any = {
                header:{
                    status: "pending",
                    timestamp:new Date().getTime(),
                    owner: getPublicKey(privateKey),
                    toAddress: "00000000",
                    amount,
                },
                data:{
                    businessRating:5,
                    businessWallet: businessPair.publicKey,
                    businessName: businessName === ""?"Anonymous":businessName,
                    businessService,
                    businessProducts: businessService==="commerce"?[]:null,
                    businessImage,
                }
            }
            if(isPhysical){
                token.data.businessAddress = {
                    businessCountry,
                    businessState,
                    businessCity,
                    businessNeighbourhood,
                    businessStreet,
                    businessZipCode,
                    businessNumber
                }

            }
            
            token.data.dataHash = SHA256(`${token.data.businessRating}${token.data.businessWallet}${token.data.businessName}${token.data.businessImage}${token.data.businessService}${token.data.businessProducts?JSON.stringify(token.data.businessProducts):null}${isPhysical?token.data.addressHash:null}`).toString()
            
            token.header.hash = SHA256(`${token.header.timestamp}${token.header.owner}${token.header.toAddress}${token.header.amount}${token.data.dataHash}`).toString()
            // d7e0a0eb8980967dddd63988223315f22222722ee45f212991b1492b039ec713

            console.log(`Not signed yet \n\n${JSON.stringify(token)}`)

            try {

                token.header.signature = signHash(token.header.hash, privateKey)

                console.log(`Signed!\n\n${token}`)
                
                setSignature(token.header.signature)
                                
            } catch (error) {

                alert(`Could not Sign this Contract`)
                
                setSignature("")

                setIsLoading(false)
                return

            }finally{

                alert(`\n\nTHIS BUSINESS KEY WILL NOT BE VISIBLE AGAIN!!!\n\nWrite down to a paper and keep it safe\n\n${businessPair.privateKey}`)

                try {
                    await fetch(`${baseUrl}/chain`, {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            type: "new-business",
                            data: token
                        })
                    }).then(res=>res.json()).then(res=>{
                        
                        console.log(JSON.stringify(res))
                        alert(JSON.stringify(res))
                        

                        if(res.type==="error"){
                            alert(res.error.message)
                        }
                        if(res.type==="new-business"){

                            alert(`Pending List:\n\n${JSON.stringify(res.data)}`)

                            const { data } = res
                            if(verifySignature(data.header.owner, data.header.hash, data.header.signature)){
                                if(data.header.owner === getPublicKey(privateKey)){

                                    const businessList = myBusinessList

                                    businessList.push(data)

                                    setMyBusinessList(businessList)
                                    
                                    openBadger(data)
                                }
                            }
                        }
                    })
                    
                } catch (error) {
                    
                    setIsLoading(false)
                    
                }finally{

                    closeContractForm()    
                    setIsLoading(false)
                }

            }
        }

    }

    useEffect(() => {
        
        document.addEventListener("keydown", (e) => {
            
            if (e.key === 'Enter' || e.key === 'ArrowRight') {
                if (!noNext) {
                    setStep(step + 1)
                }
            }
        })
    }, [])
    
    function getPosition(e: any) {

        e.preventDefault()

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
        } function getPosition(position: any) {
            alert(position.coords.latitude);
            alert(position.coords.longitude);
        }
    }

   
    return (
        <S.Wrapper id={'form'}>
            <S.FloatWrapper isChromium={isChromium}>
                <S.FloatTopWrapper>
                    {`$new_Businnes(${businessName?businessName.replaceAll(" ", "_"):`Anonymous`});`}
                </S.FloatTopWrapper>

                <S.FloatMidWrapper>
                    <Questions {...questionParam}/>
                </S.FloatMidWrapper>

                <S.FloatBottomWrapper>
                    <S.NavFormBtn ref={prevBtnRef} onClick={previousStep} disabled={noPrev}>
                        <M.MdChevronLeft/>
                    </S.NavFormBtn>

                    <S.NavFormBtn ref={nextBtnRef} onClick={step < 4?nextStep:createBusines} disabled={noNext}>
                        {step < 4?
                        <M.MdChevronRight/>
                        :
                        <M.MdCheck/>}
                    </S.NavFormBtn>
                </S.FloatBottomWrapper>
            </S.FloatWrapper>
        </S.Wrapper>
    )
}