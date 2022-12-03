import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 300px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    overflow: scroll;
    
`

export const PriceWrapper = styled.div`
    max-width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #4847;
    border-radius: 5px;
`

export const InputContainer = styled.div`
    width: 80%;
    height: 24px;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
`

export const InputElement = styled.input`
    width: 100%;
    height: 100%;
    padding: 1em;
    font-size: 0.6em;
    color: #fff;
    background: #1a0d19;
    border: none;
    border-radius: 8px;
    border: 1px solid #444;

    ::placeholder {
        color: #f00;
        opacity: 1;
    };

    :disabled{
        color: #fff;
        opacity: 0.3;
        border: none;
    };
`

export const InputRadioElement = styled.input`
    width: 20px;
    height: 20px;
    background: #202020;
    border: none;
    border-radius: 50%;
`
