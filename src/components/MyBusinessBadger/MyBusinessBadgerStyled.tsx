import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    font-size: 0.6rem;
    color: #fff;
    word-break: break-all;
    overflow: hidden;
`

export const FloatWrapper = styled.div`
    width: 96%;
    height: 96%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #2f002f;
    border-radius: 24px;
    color: #fff;
    overflow: hidden;
`

export const TopWrapper = styled.div`
    width: 100%;
    height: 100px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff1;
    color: #fff;
    cursor: pointer;
`

export const LogoWrapper = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #fff1;
    border-radius: 50%;
    object-fit: auto;
    overflow: hidden;
`

export const CommercialInfoWrapper = styled.div`
    width: calc(100% - 120px);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    word-break: break-all;
    text-align: center;
    color: #fff;
    background: #fff1;
    border-radius: 8px;
`

export const InfoLineWrapper = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    word-break: break-all;
    text-align: center;
    font-size: 0.7em;
    color: #fff;
    background: #fff1;
    border-radius: 8px;
`

export const BusinessWrapper = styled.div`
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #fff1;
    color: #fff;
    overflow: auto;
`

export const SpinContainer = styled.div`
    min-width: 100%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 1px solid #fff;
`

export const CloseBtn = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #654;
    color: #fff;
    border-radius: 50%;
    border: none;
`

export const AddProductBtn = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 8px;
    left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #654;
    color: #fff;
    border-radius: 50%;
    border: none;
`