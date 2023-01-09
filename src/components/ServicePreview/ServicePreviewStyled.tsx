import styled from "styled-components";
import { ServicePreviewTypes } from ".";
import { HomeTypes } from "../../pages";

export const Wrapper = styled.div<HomeTypes>`
    width: 100%;
    min-height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0px 8px;
    background: ${({isChromium})=>isChromium?`#fff1`:`#000`};
    backdrop-filter: blur(6px);
    border-top: 1px solid #fff;
    border-bottom: 4px solid #000;
`

export const PlanetVisualWrapper = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 50%;
    overflow: hidden;
`
export const Status = styled.div<ServicePreviewTypes>`
    width: 10px;
    height: 10px;
    display: flex;
    position: absolute;
    top: 4px;
    left: 50px;
    color: #f00;
    background: ${({status})=>status==="mined"?"#8f0": "#f80"};
    border-radius: 50%;
`

export const PlanePreview = styled.div`
    width: calc( 100% - 50px );
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PlanetNameWrapper2 = styled.div`
    width: 100%;
    min-height: 33.3%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 0.7em;
    text-align: center;
    word-break: break-all;
    overflow: hidden;
`
