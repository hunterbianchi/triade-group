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

    const [isPhysical, setIsPhysical] = useState(false)

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
                    <div>
                        {`Business Name:`}
                    </div>
                    <div>
                        {`( Empty to Anonimous business )`}
                    </div>
                    
                    <S.InputContainer>
                        <S.InputElement  placeholder={`Anonimous`} value={businessName} type={"text"} onChange={handleBusinessName} />
                    </S.InputContainer>
                </S.FloatMidWrapper>

                <S.FloatBottomWrapper>
                    <button onClick={getPosition}>
                        {`X`}
                    </button>
                    <button onClick={previousStep} disabled={!(step>0)}>
                        {`<`}
                    </button>
                    <button onClick={nextStep}>
                        {`>`}
                    </button>
                </S.FloatBottomWrapper>
            </S.FloatWrapper>}
            {step === 1 && <S.FloatWrapper isChromium={isChromium}>
                <S.FloatTopWrapper>
                    {`${businessName?businessName:`Anonimous`} informations:`}
                </S.FloatTopWrapper>
                <S.FloatMidWrapper>
                    <div>
                        <label>
                            {`Industry`}
                            <input name={`Radio`} checked={isPhysical} type={"radio"} />
                        </label>
                        <br/>
                        <label>
                            {`Commerce`}
                            <input name={`Radio`} checked={isPhysical} type={"radio"} />
                        </label>
                        <br/>
                        <label>
                            {`Eletronic Commerce`}
                            <input name={`Radio`} checked={isPhysical} type={"radio"} />
                        </label>
                        <br/>
                        <label>
                            {`Radio`}
                            <input name={`Radio`} checked={isPhysical} type={"radio"} />
                        </label>
                    </div>
                    <label>
                        {`Physical Business? `}
                        <input checked={isPhysical} type={"checkbox"} onChange={()=>setIsPhysical(!isPhysical)} />
                    </label>
                    <label>
                        {`? `}
                        <input checked={isPhysical} type={"checkbox"} onChange={()=>setIsPhysical(!isPhysical)} />
                    </label>
                </S.FloatMidWrapper>

                <S.FloatBottomWrapper>
                    <button onClick={getPosition}>
                        {`X`}
                    </button>
                    <button onClick={previousStep} disabled={!(step>0)}>
                        {`<`}
                    </button>
                    <button onClick={nextStep}>
                        {`>`}
                    </button>
                </S.FloatBottomWrapper>
            </S.FloatWrapper>}

            {step === 2 && <>
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