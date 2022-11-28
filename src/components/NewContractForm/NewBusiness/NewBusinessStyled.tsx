import styled from "styled-components";
import { HomeTypes } from "../../../pages";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    overflow: hidden;
`

export const FloatWrapper = styled.div<HomeTypes>`
    width: 94%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({isChromium})=>isChromium?`#0008`:`#000`};
    backdrop-filter: blur(6px);
    border-radius: 32px;
    border-top: 1px solid #f0f0f080;
    border-bottom: 1px solid #f0f0f080;
    overflow: hidden;
`

export const FloatTopWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
`

export const FloatMidWrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
`

export const FloatBottomWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: transparent;
`

export const InputContainer = styled.div`
    width: 80%;
    height: 30px;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
`

export const InputElement = styled.input`
    width: 100%;
    height: 100%;
    color: #fff;
    background: #430000;
    border: none;
    border-radius: 8px;
`