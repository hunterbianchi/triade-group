import * as S from './ServicePreviewStyled'
import * as F from 'react-icons/fa'
import Image from 'next/image'
import { useEffect } from 'react'
import { getPublicKey, slicePublicKey } from '../../utils/manageKeys'
// src/utils/manageKeys.ts

export type ServicePreviewTypes = {
    status: string;
}


export default function ServicePreview ({privateKey, openBadger, service, isChromium}:any) {

    return (
        <S.Wrapper onClick={()=>openBadger(service)} isChromium={isChromium}>
            <S.PlanetVisualWrapper>
                {service.data.businessImage && <>
                    <Image
                        src={service.data.businessImage}
                        alt={"Business Logo"}
                        width={50}
                        height={50}
                    />
                </>}
            </S.PlanetVisualWrapper>
                {service.header.owner === getPublicKey(privateKey) && <S.Status status={service.header.status}>{service.header.status==="pending"? <F.FaClock/>:<F.FaCheck/>}</S.Status>}
            <S.PlanePreview>
                <S.PlanetNameWrapper2>
                    <strong>
                        {`${service.data.businessName} `}
                    </strong>
                    <strong>
                        {`Rating: ${service.data.businessRating}`}
                    </strong>
                </S.PlanetNameWrapper2>
                <S.PlanetNameWrapper2>
                    {`${slicePublicKey(service.data.businessWallet)}`}
                </S.PlanetNameWrapper2>
            </S.PlanePreview>
        </S.Wrapper>
    )
}