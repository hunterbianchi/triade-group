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
    height: 90%;
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
    height: 50px;
    padding: 4px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: sans-serif;
    font-size: 20px;
    word-break: keep-all;
    color: #465;

    background: linear-gradient(#000 5%, #fff2 10%, #6452 20%, #6452 90%, #6452 100%);
    overflow: hidden;
    border-bottom: 1px solid #222;
`

export const FloatMidWrapper = styled.div`
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background: #6452;
    overflow: hidden;
    font-size: 0.7em;
`

export const FloatBottomWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: linear-gradient(#000 5%, #fff2 10%, #6452 20%, #6452 90%, #6452 100%);
    border-top: 1px solid #222;
`

export const CloseFormBtn = styled.button`
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 25px;
    color: #fff;
    border: none;
    border-top: 4px solid #f447;
    border-bottom: 4px solid #8447;
    background: #a447;
    cursor: pointer;
    /* box-shadow: X Y Smoth Ray color; */
    transition: 0.2s ease-in-out;
    
    :hover{
        border-top: 4px solid #f229;
        border-bottom: 4px solid #f229;
        background: #a22;

        box-shadow: -10px 10px 30px 8px #000;
        scale: 1.2;
    }
`

export const NavFormBtn = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 25px;
    color: #fff;
    border: none;
    border-top: 4px solid #4f47;
    border-bottom: 4px solid #4847;
    background: #4a47;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    
    :disabled{
        color: #888;
        border-top: 2px solid #222;
        border-bottom: 2px solid #888;
        background: #444;
        scale: 0.9;

        :hover{
            border-top: 2px solid #111;
            border-bottom: 2px solid #444;
            background: #444;
            box-shadow: 0px 0px 0px 0px;
            scale: 1;
            cursor: not-allowed;
        };
    };

    :hover{
        border-top: 4px solid #4f47;
        border-bottom: 4px solid #4f47;
        background: #0a0;

        box-shadow: -10px 10px 30px 8px #000;
        scale: 1.2;
    };
`
