import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import * as S from './QuestionsStyled'

import Delivery from '../../../../images/Delivery.svg'
import Production from '../../../../images/Production.svg'
import { getPublicKey } from '../../../../utils/manageKeys';

export type QuestionTypes = {
    isPhysical: boolean;
}

function convertToBase64(file: any) {
    return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    });
}


export default function Questions
({
    isPhysical,
    businessImage,
    setBusinessImage,
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
}:any) {

    const [actionArea, setActionArea] = useState<number>(1000)
    
    function handleActionArea (e: any){
        setActionArea(e.target.value)
    }

    async function handleFile(e:any){
        const files = e.target.files
        if(files){
            for (let file of files) {
                if(file.type.startsWith('image/')){
                    setBusinessImage(await convertToBase64(file))
                }else{
                    alert('File is not an Image!\n\nSelect an Image to continue or do not select anything')
                    setBusinessImage('')
                }
            }
        }
    }

    return (
        <S.Wrapper>
            {step === 0 && <S.QuestionWrapper>
                <S.QuestionTitle>
                    {`Business Name:`}
                </S.QuestionTitle>

                <S.InputLabel htmlFor='business-name'>
                    {`( Empty to Anonymous business )`}
                </S.InputLabel>
                <S.InputElement id='business-name' placeholder={`Anonymous`} value={businessName} type={"text"} onChange={handleBusinessName} />

            </S.QuestionWrapper>}
            
            {step === 1 && <S.QuestionWrapper>
                <S.QuestionTitle>
                    {`${businessName?businessName:'"Anonymous"'} Logo:`}
                </S.QuestionTitle>
                
                {businessImage && <S.ImagePreview>
                    <Image
                        src={businessImage}
                        alt='Business Logo'
                        width={200}
                        height={200}
                        style={{overflow:"hidden", objectFit: "contain", background: "#fff"}}
                        
                    />
                </S.ImagePreview> || <>{"Heyy"}</>}

                <S.InputLabel htmlFor='logo'>
                    {`Choose an image`}
                </S.InputLabel>
                <S.InputElement id='logo' accept="image/*" type={"file"} onChange={handleFile} />
                    
            </S.QuestionWrapper>}

            {step === 2 && <S.QuestionWrapper>
                <S.BusinessOption>
                    <S.DeliveryOption businessService={businessService} onClick={(e: any) => chooseService(e, `delivery`)}>
                        <label htmlFor='business-delivery'>Delivery</label>
                        <Image
                            id='business-delivery'
                            src={Delivery}
                            alt="Delivery option"
                            width={200}
                        />
                        <input name={`Radio`} checked={businessService === 'delivery'} type={"radio"} />
                    </S.DeliveryOption>
                    <S.CommerceOption businessService={businessService} onClick={(e: any) => chooseService(e, `commerce`)}>
                    <label htmlFor='business-commerce'>Commerce</label>
                        <Image
                            id='business-commerce'
                            src={Production}
                            alt="Delivery option"
                            width={200}
                        />
                        <input name={`Radio`} checked={businessService === 'commerce'} type={"radio"} />
                    </S.CommerceOption>
                </S.BusinessOption>
            </S.QuestionWrapper>}

            {step === 3 && businessService === 'commerce' && <S.QuestionWrapper>
                <S.InputLabel htmlFor='physical'>{`Physical Business? `}</S.InputLabel>
                <input id='physical' checked={isPhysical} type={"checkbox"} onChange={() => setIsPhysical(!isPhysical)} />

                <S.InputLabel htmlFor='country'>{`Country`}</S.InputLabel>
                <S.InputElement id='country' disabled={!isPhysical} placeholder={`Malta`} value={businessCountry} type={"text"} onChange={handleBusinessCountry} />

                <S.InputLabel htmlFor='state'>{`State`}</S.InputLabel>
                <S.InputElement id='state' disabled={!isPhysical} placeholder={`San Ġiljan`} value={businessState} type={"text"} onChange={handleBusinessState} />

                <S.InputLabel htmlFor='city'>{`City`}</S.InputLabel>
                <S.InputElement id='city' disabled={!isPhysical} placeholder={`San Ġiljan`} value={businessCity} type={"text"} onChange={handleBusinessCity} />
                
                <S.InputLabel htmlFor='neighbourhood'>{`Neighbourhood`}</S.InputLabel>
                <S.InputElement id='neighbourhood' disabled={!isPhysical} placeholder={`San Ġiljan`} value={businessNeighbourhood} type={"text"} onChange={handleBusinessNeighbourhood} />
                
                <S.InputLabel htmlFor='street'>{`Street`}</S.InputLabel>
                <S.InputElement id='street' disabled={!isPhysical} placeholder={`Triq Ross`} value={businessStreet} type={"text"} onChange={handleBusinessStreet} />

                <S.InputLabel htmlFor='zip'>{`ZIP code`}</S.InputLabel>
                <S.InputElement id='zip' disabled={!isPhysical} placeholder={`STJ 3243`} value={businessZipCode} type={"text"} onChange={handleBusinessZipCode} />

                <S.InputLabel htmlFor='number'>{`Number`}</S.InputLabel>
                <S.InputElement id='number' disabled={!isPhysical} placeholder={`0`} value={businessNumber} type={"text"} onChange={handleBusinessNumber} />
            </S.QuestionWrapper>}

            {step === 3 && businessService === 'delivery' && <S.QuestionWrapper>
                
                <S.InputLabel>
                    <S.LabelWrapper isPhysical={true}>
                        {`Country`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`Malta`} value={businessCountry} type={"text"} onChange={handleBusinessCountry} />
                </S.InputLabel>
                
                <S.InputLabel>
                    <S.LabelWrapper isPhysical={true}>
                        {`State`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`San Ġiljan`} value={businessState} type={"text"} onChange={handleBusinessState} />
                </S.InputLabel>

                <S.InputLabel>
                    <S.LabelWrapper isPhysical={true}>
                        {`City`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`San Ġiljan`} value={businessCity} type={"text"} onChange={handleBusinessCity} />
                </S.InputLabel>
                
                <S.InputLabel>
                    <S.LabelWrapper isPhysical={true}>
                        {`Neighbourhood`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`San Ġiljan`} value={businessNeighbourhood} type={"text"} onChange={handleBusinessNeighbourhood} />
                </S.InputLabel>
                
                <S.InputLabel>
                    <S.LabelWrapper isPhysical={true}>
                        {`Street`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`Triq Ross`} value={businessStreet} type={"text"} onChange={handleBusinessStreet} />
                </S.InputLabel>

                <S.InputLabel>
                    <S.LabelWrapper isPhysical={true}>
                        {`ZIP code`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`STJ 3243`} value={businessZipCode} type={"text"} onChange={handleBusinessZipCode} />
                </S.InputLabel>

                <S.InputLabel>
                    <S.LabelWrapper isPhysical={true}>
                        {`Number`}
                    </S.LabelWrapper>
                    <S.InputElement placeholder={`0`} value={businessNumber} type={"text"} onChange={handleBusinessNumber} />
                </S.InputLabel>
                
            </S.QuestionWrapper>}

            {step === 4 && businessService === 'delivery' && <S.QuestionWrapper>
                <S.InputLabel>
                    {`Action area (Meters)`}
                    <S.InputElement type={"number"} onChange={handleActionArea} value={actionArea} />
                </S.InputLabel>

                <S.DeliveryAreaWrapper>
                </S.DeliveryAreaWrapper>

            </S.QuestionWrapper>}

            {step === 4 && businessService === 'commerce' && <S.QuestionWrapper>

                <S.NegociationWrapper>
                    <S.DescriptionWrapper>
                        <S.TopWrapper>
                            <S.ImageWrapper>
                                {businessImage && <Image
                                    src={businessImage}
                                    alt="Business Logo"
                                    width={100}
                                    height={100}
                                    style={{objectFit: "contain", background: "#fff"}}
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
                            {`TAD: ${amount}`}
                        </S.PriceWrapper>

                        <S.InputLabel>
                            <S.InputElement placeholder={`Private Key (secp256k1)`} value={privateKey} type={"text"} onChange={handlePrivateKey} />
                        </S.InputLabel>
                    </S.ActionWrapper>

                </S.NegociationWrapper>

            </S.QuestionWrapper>}
            
        </S.Wrapper>
    )
}