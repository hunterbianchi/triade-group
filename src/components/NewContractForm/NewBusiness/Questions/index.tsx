import { useState } from 'react'
import * as S from './QuestionsStyled'

export default function Questions  ({
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
    handlePrivateKey}:any) {

    const [businessModel, setBusinessModel] = useState(true)

    const [isPhysical, setIsPhysical] = useState(false)

    return (
        <S.Wrapper>
            {step === 0 && <>
                <h1>
                    {`Business Name:`}
                </h1>
                <div>
                    {`( Empty to Anonimous business )`}
                </div>

                <S.InputContainer>
                    <S.InputElement placeholder={`Anonimous`} value={businessName} type={"text"} onChange={handleBusinessName} />
                </S.InputContainer>
            </>}

            {step === 1 && <>
            <label>
                {`Commerce`}
                <input name={`Radio`} checked={businessModel} type={"radio"} onChange={(e: any) => setBusinessModel(e.target.checked)} />
            </label>
            <label>
                {`Delivery`}
                <input name={`Radio`} checked={businessModel} type={"radio"} onChange={(e: any) => setBusinessModel(e.target.checked)} />
            </label>
            </>}

            {step === 2 && <>
            <S.InputContainer>
                    {`Physical Business? `}
                    <input checked={isPhysical} type={"checkbox"} onChange={() => setIsPhysical(!isPhysical)} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.InputElement disabled={!isPhysical} placeholder={`Country`} value={businessName} type={"text"} onChange={handleBusinessName} />
                </S.InputContainer>
                
                <S.InputContainer>
                    <S.InputElement disabled={!isPhysical} placeholder={`State`} value={businessName} type={"text"} onChange={handleBusinessName} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.InputElement disabled={!isPhysical} placeholder={`City`} value={businessName} type={"text"} onChange={handleBusinessName} />
                </S.InputContainer>
                
                <S.InputContainer>
                    <S.InputElement disabled={!isPhysical} placeholder={`Neighbour`} value={businessName} type={"text"} onChange={handleBusinessName} />
                </S.InputContainer>
                
                <S.InputContainer>
                    <S.InputElement disabled={!isPhysical} placeholder={`Street`} value={businessName} type={"text"} onChange={handleBusinessName} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.InputElement disabled={!isPhysical} placeholder={`Number`} value={businessName} type={"number"} onChange={handleBusinessName} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.InputElement disabled={!isPhysical} placeholder={`ZIP code`} value={businessName} type={"number"} onChange={handleBusinessName} />
                </S.InputContainer>
            </>}

            {step === 3 && <>
                <S.PriceWrapper>
                    {`TAD: ${0.007}`}
                </S.PriceWrapper>

                <S.InputContainer>
                    <S.InputElement placeholder={`Private Key (secp256k1)`} value={businessName} type={"text"} onChange={handleBusinessName} />
                </S.InputContainer>
            </>}

        </S.Wrapper>
    )
}