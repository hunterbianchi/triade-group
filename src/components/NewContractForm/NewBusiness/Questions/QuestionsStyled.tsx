import styled from "styled-components";
import { QuestionTypes } from ".";
import { ContractTypes } from "../..";
import { HomeTypes } from "../../../../pages";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden; 
`

export const QuestionWrapper = styled.div`
    width: 100%;
    height: 100%;
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background: transparent;
    overflow: scroll; 
`

export const QuestionTitle = styled.h2`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4a4;
    background: transparent;
    overflow: hidden;
`


export const BusinessOption = styled.div`
    width: 100%;
    height: 100%;
    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: start;
    background: transparent;
    overflow: hidden; 
`

export const DeliveryOption = styled.div<ContractTypes>`
    width: 50%;
    height: 100%;
    gap: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: ${({businessService})=>businessService===`delivery`?`#343`:`transparent`};
    overflow: hidden; 
`

export const CommerceOption = styled.div<ContractTypes>`
    width: 50%;
    height: 100%;
    gap: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: ${({businessService})=>businessService===`commerce`?`#343`:`transparent`};
    overflow: hidden; 
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

export const InputContainer = styled.label`
    width: 80%;
    height: 60px;
    display: flex;
    color: #465;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
export const DeliveryWrapper = styled.div``

export const LabelWrapper = styled.div<QuestionTypes>`
    height: 1em;
    color: ${({isPhysical})=>isPhysical?`#fff`:`#fff3`};
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const InputElement = styled.input`
    width: 100%;
    height: 100%;
    padding: 1em;
    font-size: 0.9em;
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
