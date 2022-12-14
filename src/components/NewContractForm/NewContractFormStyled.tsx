import styled from "styled-components";
import { HomeTypes } from "../../pages";


export const Wrapper = styled.div<HomeTypes>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-start;
    color: #fff;
    position: absolute;
    top: 0;
    background: #0009;
    z-index: 2;
`

export const TriadeOptionsWrapper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
`

export const ContractContainer = styled.form`
    width: 100%;
    height: calc(100vh - 30px);
`

export const ContractForm = styled.form`
    width: 100%;
    height: 100%;
`

export const ContractGroupBtn = styled.button`
    width: 40vw;
    height: 30px;
    background: #4a47;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    :hover{
        background: #4a49;
        box-shadow: -10px 10px 30px 8px #000;
    }
`

export const ContractTypeBtn = styled.button`
    width: 40vw;
    height: 30px;
    background: #4a47;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    :hover{
        background: #4a49;
        box-shadow: -10px 10px 30px 8px #000;
    }
`

export const CloseFormBtn = styled.button`
    width: 30px;
    height: 30px;
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

export const FloatOptionsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0008;
`

export const FloatOptions = styled.div`
    width: 60vw;
    padding: 12px;
    gap: 12px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background: #312; */
    background: #132;
    border-radius: 4px;
    /* border: 1px solid #645; */
    border: 1px solid #406050;
    box-shadow: 6px 12px 12px 8px #001;
`

export const OptionBtn = styled.button`
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4a4;
    background: transparent;
    border: none;
    border: 1px solid #3333;
    border-radius: 6px;
    cursor: pointer;
    
    :hover{
        background: #0007;
        color: #8f8;
        border: 1px solid #4a4;
        box-shadow: 0px 0px 80px 2px #040;
    }
`
