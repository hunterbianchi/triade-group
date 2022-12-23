import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import * as S from './QuestionsStyled'

import Delivery from '../../../../images/Delivery.svg'
import Production from '../../../../images/Production.svg'
import { getPublicKey } from '../../../../utils/manageKeys';

export type QuestionTypes = {
    isPhysical: boolean;
}



export default function Questions
({
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
}:any) {


    const [isPhysical, setIsPhysical] = useState<boolean>(false)
    const [actionArea, setActionArea] = useState<number>(1000)
    
    function handleActionArea (e: any){
        setActionArea(e.target.value)
    }

    return (
        <S.Wrapper>
            {step === 0 && <S.QuestionWrapper>
                <S.QuestionTitle>
                    {`Business Name:`}
                </S.QuestionTitle>

                <S.InputContainer>
                    {`( Empty to Anonymous business )`}
                    <S.InputElement placeholder={`Anonymous`} value={businessName} type={"text"} onChange={handleBusinessName} />
                </S.InputContainer>
            </S.QuestionWrapper>}

            {step === 1 && <S.QuestionWrapper>
                <S.BusinessOption>
                    <S.DeliveryOption businessService={businessService} onClick={(e: any) => chooseService(e, `delivery`)}>
                        <Image
                            src={Delivery}
                            alt="Delivery option"
                            width={200}
                        />
                        <label>
                            <input name={`Radio`} checked={businessService === 'delivery'} type={"radio"} />
                        </label>
                    </S.DeliveryOption>
                    <S.CommerceOption businessService={businessService} onClick={(e: any) => chooseService(e, `commerce`)}>
                        <Image
                            src={Production}
                            alt="Commerce option"
                            width={200}
                        />
                        <label>
                            <input name={`Radio`} checked={businessService === 'commerce'} type={"radio"} />
                        </label>
                    </S.CommerceOption>
                </S.BusinessOption>
            </S.QuestionWrapper>}

            {step === 2 && businessService === 'commerce' && <S.QuestionWrapper>
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
                        {`ZIP code`}
                    </S.LabelWrapper>
                    <S.InputElement disabled={!isPhysical} placeholder={`STJ 3243`} value={businessZipCode} type={"text"} onChange={handleBusinessZipCode} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.LabelWrapper isPhysical={isPhysical}>
                        {`Number`}
                    </S.LabelWrapper>
                    <S.InputElement disabled={!isPhysical} placeholder={`0`} value={businessNumber} type={"text"} onChange={handleBusinessNumber} />
                </S.InputContainer>
            </S.QuestionWrapper>}

            {step === 2 && businessService === 'delivery' && <S.QuestionWrapper>
                
                <S.InputContainer>
                    <S.LabelWrapper isPhysical={true}>
                        {`Country`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`Malta`} value={businessCountry} type={"text"} onChange={handleBusinessCountry} />
                </S.InputContainer>
                
                <S.InputContainer>
                    <S.LabelWrapper isPhysical={true}>
                        {`State`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`San Ġiljan`} value={businessState} type={"text"} onChange={handleBusinessState} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.LabelWrapper isPhysical={true}>
                        {`City`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`San Ġiljan`} value={businessCity} type={"text"} onChange={handleBusinessCity} />
                </S.InputContainer>
                
                <S.InputContainer>
                    <S.LabelWrapper isPhysical={true}>
                        {`Neighbourhood`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`San Ġiljan`} value={businessNeighbourhood} type={"text"} onChange={handleBusinessNeighbourhood} />
                </S.InputContainer>
                
                <S.InputContainer>
                    <S.LabelWrapper isPhysical={true}>
                        {`Street`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`Triq Ross`} value={businessStreet} type={"text"} onChange={handleBusinessStreet} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.LabelWrapper isPhysical={true}>
                        {`ZIP code`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`STJ 3243`} value={businessZipCode} type={"text"} onChange={handleBusinessZipCode} />
                </S.InputContainer>

                <S.InputContainer>
                    <S.LabelWrapper isPhysical={true}>
                        {`Number`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`0`} value={businessNumber} type={"text"} onChange={handleBusinessNumber} />
                </S.InputContainer>
                
            </S.QuestionWrapper>}

            {step === 2.5 && businessService === 'delivery' && <S.QuestionWrapper>
                <S.InputContainer>
                    {`Action area (Meters)`}
                    <S.InputElement type={"number"} onChange={handleActionArea} value={actionArea} />
                </S.InputContainer>

                <S.DeliveryAreaWrapper>
                </S.DeliveryAreaWrapper>

            </S.QuestionWrapper>}

            {step === 3 && <S.QuestionWrapper>

                <S.NegociationWrapper>
                    <S.DescriptionWrapper>
                        <S.TopWrapper>
                            <S.ImageWrapper>
                                {businessService === 'commerce' && <Image
                                    src={Production}
                                    alt="Commerce option"
                                    width={100}
                                />}
                                {businessService === 'delivery' && <Image
                                    src={Delivery}
                                    alt="Commerce option"
                                    width={100}
                                />}
                            </S.ImageWrapper>
                            <S.InfoWrapper>
                                <S.LineWrapper>
                                    <S.NameWrapper>
                                        {businessName?businessName:"Anonymous"}
                                    </S.NameWrapper>
                                    <S.RatingWrapper>
                                        {`5/5`}
                                    </S.RatingWrapper>
                                </S.LineWrapper>
                                <S.LineWrapper>
                                    {isPhysical && businessService === 'delivery' && <S.CountryWrapper>
                                        {businessCountry}
                                    </S.CountryWrapper>}
                                    
                                    <S.ServiceWrapper>
                                        {businessService}
                                    </S.ServiceWrapper>
                                </S.LineWrapper>
                                <S.LineWrapper>
                                    <S.WalletWrapper>
                                        {getPublicKey(privateKey)}
                                    </S.WalletWrapper>
                                </S.LineWrapper>
                            </S.InfoWrapper>
                        </S.TopWrapper>
                    </S.DescriptionWrapper>
                    <S.ActionWrapper>
                        <S.PriceWrapper>
                            {`TAD: ${0.0070000000000}`}
                        </S.PriceWrapper>

                        <S.InputContainer>
                            <S.InputElement placeholder={`Private Key (secp256k1)`} value={privateKey} type={"text"} onChange={handlePrivateKey} />
                        </S.InputContainer>
                    </S.ActionWrapper>

                </S.NegociationWrapper>

            </S.QuestionWrapper>}
            
        </S.Wrapper>
    )
}