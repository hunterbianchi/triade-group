import { SHA256 } from 'crypto-js'
import { useEffect, useState } from 'react'
import { createKeyPair, getPublicKey, signHash } from '../../../utils/manageKeys'
import * as F from 'react-icons/fa'
import * as M from 'react-icons/md'
import * as S from './NewBusinessStyled'
import Questions from './Questions'
import { objectToOpCode, opCodeToObject } from '../../../utils/opCode'

export default function NewBusiness
({

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
            setNoPrev(false)
            setStep(step + 1)

        }else {
          setNoNext(true)
        }
    }

    function previousStep(e: any) {
        e.preventDefault()

        if(step-1 <= 0){
            setNoPrev(true)
            setStep(step - 1)
        }
        if(step%1===0.5){
            setStep(step - 0.5)
        }else{
            setStep(step - 1)
        }
    }

    function chooseService(e: any, service: string){
        e.preventDefault()

        setBusinessService(service)
        setNoNext(false)
    }

    async function createBusines(e: any){
        
        e.preventDefault()

        if(businessName === ""){
            setBusinessName("Anonymous")
        }

        if(!privateKey){
            alert("\n\tCONTRACT NOT SIGNED!\n\n\tPut you private key to sign this contract.\n\n")
            setIsLoading(false)
        }else{

            setIsLoading(true)

            const businessPair = createKeyPair()

            const token: any = {
                header:{
                    timestamp:new Date().getTime(),
                    owner: getPublicKey(privateKey),
                    toAddress: "00000000",
                    amount,
                },
                data:{
                    businessRating:5,
                    businessWallet: businessPair.publicKey,
                    businessName,
                    businessService,
                    businessProducts: businessService==="Commerce"?[]:null,
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

                token.data.addressHash = SHA256(`${businessCountry}${businessState}${businessCity}${businessNeighbourhood}${businessStreet}${businessZipCode}${businessNumber}`).toString()
            }
            
            token.data.dataHash = SHA256(`${token.data.businessRating}${token.data.businessWallet}${token.data.businessName}${token.data.businessImage}${token.data.businessService}${token.data.businessProducts?JSON.stringify(token.data.businessProducts):null}${isPhysical?token.data.addressHash:null}`).toString()
            
            token.header.hash = SHA256(`${token.header.timestamp}${token.header.owner}${token.header.toAddress}${token.header.amount}${token.data.dataHash}`).toString()
                // d7e0a0eb8980967dddd63988223315f22222722ee45f212991b1492b039ec713

            try {

                token.header.signature = signHash(token.header.hash, privateKey)

                setSignature(token.header.signature)
                
            } catch (error) {

                alert(`Could not Sign this Contract`)
                closeContractForm()
                setIsLoading(false)
                return

            }finally{
                alert(`\n\nTHIS BUSINESS KEY WILL NOT BE VISIBLE AGAIN!!!\n\nWrite down to a paper and keep it safe\n\n${businessPair.privateKey}`)

                try {
                    await fetch(`https://triade-api.vercel.app/api/chain`, {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            type: "new-business",
                            data: token
                        })
                    }).then(res=>res.json()).then(res=>{
                        
                        alert(JSON.stringify(res.type))
                    })
                    
                } catch (error) {
                    closeContractForm()
                    setIsLoading(false)
                    
                }finally{
                    closeContractForm()    
                    setIsLoading(false)
                }

            }
        }

    }

    useEffect(() => {
        document.addEventListener("keypress", (e) => {
            if (e.key === 'Enter' && step < 4) {
                setStep(step + 1)
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

    useEffect(()=>{
        setNoPrev(true)
    },[])
   
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
                    <S.NavFormBtn onClick={previousStep} disabled={noPrev}>
                        <M.MdChevronLeft/>
                    </S.NavFormBtn>

                    <S.NavFormBtn onClick={step < 4?nextStep:createBusines} disabled={noNext}>
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