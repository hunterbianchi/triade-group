import Notification from '../Notification'
import * as S from './TopNotofocationStyled'


export default function TopNotification ({isTopOpen, toggleTop, notifictions, isChromium}: any) {

    return (
        <S.Wrapper isTopOpen={isTopOpen} onClick={toggleTop}>

            {isTopOpen?
            <>
                <S.Header isChromium={isChromium} isTopOpen={isTopOpen} >
                    <S.PersonalWrapper>

                    </S.PersonalWrapper>
                </S.Header>
                <S.NotificationsWrapper>
                    {notifictions && notifictions.map((notification: any)=>{

                        return (
                            <S.NotificationContainer key={Math.random()}>
                                <Notification isChromium={isChromium} notification={notification}/>
                            </S.NotificationContainer>
                        )
                    })}
                </S.NotificationsWrapper>
            </>
            :
            <>
                <S.Header isChromium={isChromium} isTopOpen={isTopOpen} >

                </S.Header>
            
            </>
            }
        </S.Wrapper>
    )
}