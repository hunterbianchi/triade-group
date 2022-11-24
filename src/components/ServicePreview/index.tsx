import * as S from './ServicePreviewStyled'
import * as I from 'react-icons/fa'

export default function ServicePreview ({service, isChromium}:any) {
    return (
        <S.Wrapper isChromium={isChromium}>
            <S.PlanetVisualWrapper>
                <I.FaMoon/>
            </S.PlanetVisualWrapper>
            <S.PlanePreview>
                <S.PlanetNameWrapper2>
                    {service.name + " "}
                    {service.rating}
                </S.PlanetNameWrapper2>
                <S.PlanetNameWrapper2>
                    Name:
                </S.PlanetNameWrapper2>
                <S.PlanetNameWrapper2>
                    Name:
                </S.PlanetNameWrapper2>
            </S.PlanePreview>
        </S.Wrapper>
    )
}