import styled from "styled-components";
import { HomeTypes } from "../pages";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: transparent;
    overflow: hidden;
`

export const Wrapper6 = styled.div`
`

export const BackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display:flex;
    top: 0px;
    background: transparent;
    border: none;
`

export const MainWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display:flex;
    flex-direction: column;
    top: 0px;
    background: transparent;
    border: none;
`

export const TopContainer = styled.div<HomeTypes>`
    width: 100vw;
    height: ${({isTopOpen})=>isTopOpen?`20vh`:`40px`};
    position: absolute;
    top: 0px;
    background: transparent;
    z-index: 1;

`
export const CenterWrapper = styled.div<HomeTypes>`
    width: 100vw;
    height: ${({isTopOpen})=>isTopOpen?`60vh`:`calc(80vh - 40px)`};
    position: absolute;
    top: ${({isTopOpen})=>isTopOpen?`20vh`:`40px`};
    background: transparent;
    border: none;
    overflow: hidden;
    transition: 0.5s ease-in-out;
`

export const MetaverseNameWrapper = styled.div`
    width: 100vw;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #fff ;
    background: #00000080;
    backdrop-filter: blur(4px);
    border: none;
`

export const FloatWrapper = styled.div<HomeTypes>`
    width: 100vw;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    color: #fff ;
    background: transparent;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    border-radius: 20px;
    opacity: 1;
    overflow: auto;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}
`

export const PlanetCommercialInfoWrapper = styled.div`
    width: 100%;
    height: 33.3%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #fff;
`

export const PlanetFinancialInfoWrapper = styled.div`
    width: 100%;
    height: 33.3%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #fff;
`

export const PagWrapper = styled.div`
    width: 100vw;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #fff ;
    background: #00000080;
    border: none;
`

export const FooterWrapper = styled.div<HomeTypes>`
    width: 100vw;
    height: 20vh;
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items:center;
    justify-content: center;
    color: #fff;
    background: ${({isChromium})=>isChromium?`#fff1`:`#000`};
    backdrop-filter: blur(6px);
    border-top: 1px solid #fff;
    border-radius: 20px 20px 0px 0px;
`