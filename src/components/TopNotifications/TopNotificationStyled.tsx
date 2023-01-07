import styled from "styled-components";
import { HomeTypes } from "../../pages";

export const Wrapper = styled.div<HomeTypes>`
    width: 100vw;
    height: ${({isTopOpen})=>isTopOpen?`100vh`:`40px`};
    position: absolute;
    top: 0px;
    display: flex;
    align-items:center;
    justify-content: center;
    color: #fff;    
    background: #0008;
    overflow: hidden;
`        
    
export const Header = styled.div<HomeTypes>`
    width: 100vw;
    height: ${({isTopOpen})=>isTopOpen?`20vh`:`40px`};
    padding: 10px;
    position: absolute;
    top: 0px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    color: #fff;
    background: ${({isChromium})=>isChromium?`#fff1`:`#000`};
    backdrop-filter: blur(6px);
    border-bottom: 1px solid #fff;
    border-radius: 0px 0px 20px 20px;
    overflow: hidden;
    transition: 0.5s ease-in-out;
`

export const PersonalWrapper = styled.div<HomeTypes>`
    width: 100vw;
    height: 40px;
    display: flex;
    background: transparent;
    border-bottom: 1px solid #8888;
`

export const NotificationsWrapper = styled.div<HomeTypes>`
    width: 100vw;
    height: 80vh;
    padding: 10px;
    gap: 10px;
    position: absolute;
    top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
    background: transparent;
    overflow: auto;
    transition: 0.5s ease-in-out;
`

export const NotificationContainer = styled.div<HomeTypes>`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #0009;
    border-top: 1px solid #fff8;
    border-bottom: 1px solid #fff8;
    border-radius: 20px;
    overflow: hidden;
    transition: 0.5s ease-in-out;
`

