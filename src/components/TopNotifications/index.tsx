import Notification from '../Notification'
import * as S from './TopNotificationStyled'
import * as F from 'react-icons/fa'
import { useEffect, useState } from 'react'


export default function TopNotification
({
    openBadger,
    privateKey,
    myBusinessList,
    isTopOpen,
    toggleTop,
    notifictions,
    isChromium
}: any){

    const [ dateString, setDateString ] = useState(new Date().getTime())


    return (
        <S.Wrapper isTopOpen={isTopOpen} onClick={toggleTop}>

            {isTopOpen?
            <>
                <S.Header isChromium={isChromium} isTopOpen={isTopOpen} >
                    <S.PersonalWrapper>
                        {myBusinessList.length>0 && <>{myBusinessList.length}<F.FaBuilding onClick={()=>openBadger(myBusinessList[0])} /></>}
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

                    {`${dateString}`}

                </S.Header>
            
            </>
            }
        </S.Wrapper>
    )
}