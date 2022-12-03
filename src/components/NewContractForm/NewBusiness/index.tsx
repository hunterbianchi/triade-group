import { useEffect, useState } from 'react'
import * as F from 'react-icons/fa'
import * as M from 'react-icons/md'
import * as S from './NewBusinessStyled'
import Questions from './Questions'

export default function NewBusiness({
    isChromium,
    fingerprint,
    toAddress,
    handleToAddress,
    amount,
    handleAmount,
    businessName,
    handleBusinessName,
    signature,
    privateKey,
    handlePrivateKey,
    closeContractForm }: any) {


    const [step, setStep] = useState(0)


    const questionParam = {
        step,
        isChromium,
        fingerprint,
        toAddress,
        handleToAddress,
        amount,
        handleAmount,
        businessName,
        handleBusinessName,
        signature,
        privateKey,
        handlePrivateKey
    }

    function nextStep(e: any) {
        e.preventDefault()
        setStep(step + 1)
    }

    function previousStep(e: any) {
        e.preventDefault()
        setStep(step - 1)
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

   
    return (
        <S.Wrapper id={'form'}>
            <S.FloatWrapper isChromium={isChromium}>
                <S.FloatTopWrapper>
                    
                    {`new Businnes();`}
                    
                </S.FloatTopWrapper>

                <S.FloatMidWrapper>
                    <Questions {...questionParam}/>
                </S.FloatMidWrapper>

                <S.FloatBottomWrapper>
                    <S.NavFormBtn onClick={previousStep} disabled={step <= 0}>
                        <M.MdChevronLeft/>
                    </S.NavFormBtn>

                    <S.NavFormBtn onClick={nextStep} disabled={step > 3}>
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