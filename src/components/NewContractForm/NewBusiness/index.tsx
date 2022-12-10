import { useEffect, useState } from 'react'
import * as F from 'react-icons/fa'
import * as M from 'react-icons/md'
import * as S from './NewBusinessStyled'
import Questions from './Questions'

export default function NewBusiness({
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
        }else if(step + 1 === 3){
            setStep(step+1)
        }
    }

    function previousStep(e: any) {
        e.preventDefault()

        if(step-1 <= 0){
            setNoPrev(true)
        }
        setStep(step - 1)
    }

    function chooseService(e: any, service: string){
        e.preventDefault()

        setBusinessService(service)
        setNoNext(false)
    }

    function createBusines(e: any){
        e.preventDefault()

        const newBusinessName = businessName?businessName:`Anonymous`
        const newBusinessService = businessService
        const newBusinessAddress = {
            country: businessCountry,
            state: businessState,
            city: businessCity,
            neighbourhood: businessNeighbourhood,
            street: businessStreet,
            zipCode: businessZipCode,
            number: businessNumber
        }
        const privatekey = privateKey
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