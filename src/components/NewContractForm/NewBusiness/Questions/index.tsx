import Image from 'next/image';
import { useState } from 'react'
import * as S from './QuestionsStyled'

import Delivery from '../../../../images/Delivery.svg'
import Production from '../../../../images/Production.svg'

export type QuestionTypes = {
    isPhysical: boolean;
}

export default function Questions  ({
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
    step,
    isChromium,
    fingerprint,
    toAddress,
    handleToAddress,
    amount,
    handleAmount,
    signature,
    privateKey,
    handlePrivateKey}:any) {

    const [businessModel, setBusinessModel] = useState(true)

    const [isPhysical, setIsPhysical] = useState(false)

    return (
        <S.Wrapper>
            {step === 0 && <S.QuestionWrapper>
                <S.QuestionTitle>
                    {`Business Name:`}
                </S.QuestionTitle>

                <S.InputContainer>
                    {`( Empty to Anonimous business )`}
                    <S.InputElement placeholder={`Anonimous`} value={businessName} type={"text"} onChange={handleBusinessName} />
                </S.InputContainer>
            </S.QuestionWrapper>}

            {step === 1 && <S.QuestionWrapper>
                <S.BusinessOption>
                    <S.DeliveryOption businessService={businessService} onClick={(e: any) => setBusinessService(`delivery`)}>
                        <Image
                            src={Delivery}
                            alt="Delivery option"
                            width={200}
                        />
                        <label>
                            <input name={`Radio`} checked={businessService === 'delivery'} type={"radio"} />
                        </label>
                    </S.DeliveryOption>
                    <S.CommerceOption businessService={businessService} onClick={(e: any) => setBusinessService(`commerce`)}>
                        <Image
                            src={Production}
                            alt="Delivery option"
                            width={200}
                        />
                        <label>
                            <input name={`Radio`} checked={businessService === 'commerce'} type={"radio"} />
                        </label>
                    </S.CommerceOption>
                </S.BusinessOption>
            </S.QuestionWrapper>}

            {step === 2 && <S.QuestionWrapper>
                <S.InputContainer>
                    {`Physical Business? `}
                    <input checked={isPhysical} type={"checkbox"} onChange={() => setIsPhysical(!isPhysical)} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.LabelWrapper isPhysical={isPhysical}>
                        {`Country`}
                    </S.LabelWrapper>
                    <S.InputElement disabled={!isPhysical} placeholder={`Malta`} value={businessCountry} type={"text"} onChange={handleBusinessCountry} />
                </S.InputContainer>
                
                <S.InputContainer>
                    <S.LabelWrapper isPhysical={isPhysical}>
                        {`State`}
                    </S.LabelWrapper>
                    <S.InputElement disabled={!isPhysical} placeholder={`San Ġiljan`} value={businessState} type={"text"} onChange={handleBusinessState} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.LabelWrapper isPhysical={isPhysical}>
                        {`City`}
                    </S.LabelWrapper>
                    <S.InputElement disabled={!isPhysical} placeholder={`San Ġiljan`} value={businessCity} type={"text"} onChange={handleBusinessCity} />
                </S.InputContainer>
                
                <S.InputContainer>
                    <S.LabelWrapper isPhysical={isPhysical}>
                        {`Neighbourhood`}
                    </S.LabelWrapper>
                    <S.InputElement disabled={!isPhysical} placeholder={`San Ġiljan`} value={businessNeighbourhood} type={"text"} onChange={handleBusinessNeighbourhood} />
                </S.InputContainer>
                
                <S.InputContainer>
                    <S.LabelWrapper isPhysical={isPhysical}>
                        {`Street`}
                    </S.LabelWrapper>
                    <S.InputElement disabled={!isPhysical} placeholder={`Triq Ross`} value={businessStreet} type={"text"} onChange={handleBusinessStreet} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.LabelWrapper isPhysical={isPhysical}>
                        {`Number`}
                    </S.LabelWrapper>
                    <S.InputElement disabled={!isPhysical} placeholder={`0`} value={businessNumber} type={"number"} onChange={handleBusinessNumber} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.LabelWrapper isPhysical={isPhysical}>
                        {`ZIP code`}
                    </S.LabelWrapper>
                    <S.InputElement disabled={!isPhysical} placeholder={`STJ 3243`} value={businessZipCode} type={"text"} onChange={handleBusinessZipCode} />
                </S.InputContainer>
            </S.QuestionWrapper>}

            {step === 3 && <S.QuestionWrapper>
                <S.PriceWrapper>
                    {`TAD: ${0.007}`}
                </S.PriceWrapper>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206732.03745543738!2d14.238262468404487!3d35.94236861610797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45281d8647c5%3A0xf582d86136be4239!2sMalta!5e0!3m2!1spt-BR!2sbr!4v1670094577590!5m2!1spt-BR!2sbr" width="400" height="250" style={{border:0}} loading="lazy"></iframe>

                <S.InputContainer>
                    <S.InputElement placeholder={`Private Key (secp256k1)`} value={businessName} type={"text"} onChange={handleBusinessName} />
                </S.InputContainer>
            </S.QuestionWrapper>}

        </S.Wrapper>
    )
}