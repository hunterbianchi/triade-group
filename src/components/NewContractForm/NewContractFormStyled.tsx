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

export const ContractForm = styled.form`
    width: 100%;
    height: calc(100vh - 60px);
`

export const ContractGroupBtn = styled.button`
    width: 40vw;
    height: 30px;
    background: #fff;
    cursor: pointer;
    border-radius: 10px;
`

export const ContractTypeBtn = styled.button`
    width: 40vw;
    height: 30px;
    background: #fff;
    cursor: pointer;
    border-radius: 10px;
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
    background: #fff;
`

export const OptionBtn = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    background: transparent;
    border: none;
    border-top: 1px solid #000;
    cursor: pointer;

    :hover{
        background: #eef;
    }
`
