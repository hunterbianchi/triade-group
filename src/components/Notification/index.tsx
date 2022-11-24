import * as S from './NotificationStyled'

export default function Notification ({notification, isChromium}:any) {
    return (
        <S.Wrapper isChromium={isChromium}>
            {notification.name}
        </S.Wrapper>
    )
}