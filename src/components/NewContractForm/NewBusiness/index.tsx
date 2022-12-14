import { useEffect, useState } from 'react'
import * as F from 'react-icons/fa'
import * as M from 'react-icons/md'
import { createKeyPair, getPublicKey } from '../../../utils/manageKeys'
import * as S from './NewBusinessStyled'
import Questions from './Questions'

export default function NewBusiness
({
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
    const [noPrev, setNoPrev] = useState(step <= 0)
    const [noNext, setNoNext] = useState(false)


    const questionParam = {
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

        if(step + 1 === 1){
            
            if(businessService){
                setNoNext(false)
            }else{
                setNoNext(true)
            }
            setNoPrev(false)
            setStep(step + 1)

        }else if(step + 1 === 2){
            setStep(step+1)
        }else if(step + 1 === 3 || step + 1 === 3.5){
          
            if(businessService==='delivery'){
                
                setStep(step+0.5)

            }else{

                setStep(step+1)
            }
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

    function createBusines(e: any){
        
        e.preventDefault()

        const businessPair = createKeyPair()
        
            const busines: any = {
                name: businessName?businessName:`Anonymous`,
                businessWallet: businessPair.publicKey,
                businessAddress: {
                    country: businessCountry,
                    state: businessState,
                    city: businessCity,
                    neighbourhood: businessNeighbourhood,
                    street: businessStreet,
                    zipCode: businessZipCode,
                    number: businessNumber
                },
                owner: getPublicKey(privateKey),
            }


        // getPublicKey("69906cbe1bb7e266bf4bbadf534e1fb5199381790ef5b1cfdb8fabc38239c56c")
        // alert(getPublicKey(privateKey))
        alert(`Wright down your Private Key:\n${businessPair.privateKey}`)

        const protocol = '01'
        const owner = '01'
        const enc = Buffer.from(JSON.stringify(busines)).toString('base64')
        
        const dec = Buffer.from(enc, 'base64').toString('ascii')

        const opCode = `${dec.length}`
    }

    useEffect(() => {
        document.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
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

                    <S.NavFormBtn onClick={step < 3?nextStep:createBusines} disabled={noNext}>
                        {step < 3?
                        <M.MdChevronRight/>
                        :
                        <M.MdCheck/>}
                    </S.NavFormBtn>
                </S.FloatBottomWrapper>
            </S.FloatWrapper>
        </S.Wrapper>
    )
}