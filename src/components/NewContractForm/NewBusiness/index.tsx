import { useState } from 'react'
import * as S from './NewBusinessStyled'

export default function NewBusiness ({
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
    handlePrivateKey }:any) {



    const [step, setStep] = useState(0)

    function nextStep(e:any){
        e.preventDefault()
        setStep(step+1)
    }

    function previousStep(e:any){
        e.preventDefault()
        setStep(step-1)
    }
    
    function getPosition(e:any){

        e.preventDefault()

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
        }function getPosition(position:any) {
            alert(position.coords.latitude);
            alert(position.coords.longitude);
        }
    }

    return (
        <S.Wrapper>
            {step === 0 && <S.FloatWrapper isChromium={isChromium}>
                <S.FloatTopWrapper>
                    {`NEW BUSINESS`}
                </S.FloatTopWrapper>
                <S.FloatMidWrapper>
                    {`Business Name:`}
                    <S.InputContainer>
                        <S.InputElement value={businessName} type={"text"} onChange={handleBusinessName} />
                    </S.InputContainer>
                    {`CNPJ:`}
                    <S.InputContainer>
                        <S.InputElement value={businessName} type={"number"} onChange={handleBusinessName} />
                    </S.InputContainer>
                    {`Business Country:`}
                    <S.InputContainer>
                        <S.InputElement value={businessName} type={"text"} onChange={handleBusinessName} />
                    </S.InputContainer>
                    <div>
                        {``}
                        <input checked={true} type={"checkbox"}/>
                    </div>
                </S.FloatMidWrapper>
                {/* /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/ */}
                <S.FloatBottomWrapper>
                    <button onClick={getPosition}>
                        {`X`}
                    </button>
                    <button onClick={previousStep}>
                        {`<`}
                    </button>
                    <button onClick={nextStep}>
                        {`>`}
                    </button>
                </S.FloatBottomWrapper>
            </S.FloatWrapper>}

            {step === 1 && <>
                <S.InputContainer>
                    <S.InputElement value={privateKey} type={"password"} onChange={handlePrivateKey} />
                </S.InputContainer>
                <S.InputContainer>
                    {`Fingerprint: ${fingerprint}`}
                </S.InputContainer>
                <S.InputContainer>
                    <S.InputElement value={toAddress} type={"text"} onChange={handleToAddress} />
                </S.InputContainer>
                <S.InputContainer>
                    <S.InputElement value={amount} type={"text"} onChange={handleAmount} />
                </S.InputContainer>
                <S.InputContainer>
                    <S.InputElement value={businessName} type={"text"} onChange={handleBusinessName} />
                </S.InputContainer>
                <S.InputContainer>
                    {signature}
                </S.InputContainer>
            </>}
        </S.Wrapper>
    )
}