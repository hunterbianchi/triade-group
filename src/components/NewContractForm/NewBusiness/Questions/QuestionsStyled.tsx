import styled from "styled-components";
import { QuestionTypes } from ".";
import { ContractTypes } from "../..";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden; 
`

export const QuestionWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 18px 0px;
    gap: 12px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background: transparent;
    overflow: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
    
    ::-webkit-scrollbar {
        display: none;
    }
`

export const QuestionTitle = styled.h1`
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
    background: ${({ businessService }) => businessService === `delivery` ? `#343` : `transparent`};
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
    background: ${({ businessService }) => businessService === `commerce` ? `#343` : `transparent`};
    overflow: hidden; 
`

export const NegociationWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

export const DescriptionWrapper = styled.div`
    width: 100%;
    height: 50%;
    padding: 0px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TopWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    object-fit: auto;
    overflow: hidden;
`

export const ImagePreview = styled.div`
    max-width: 200px;
    min-width: 200px;
    max-height: 200px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    object-fit: auto;
    overflow: hidden;
`

export const InfoWrapper = styled.div`
    width: calc(100% - 100px);
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LineWrapper = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const NameWrapper = styled.strong`
    max-width: 60%;
    height: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: underline;
`

export const RatingWrapper = styled.strong`
    max-width: 40%;
    height: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CountryWrapper = styled.div`
    max-width: 50%;
    height: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const ServiceWrapper = styled.div`
    max-width: 50%;
    height: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const WalletWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    word-break: break-all;
`

export const ActionWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const PriceWrapper = styled.div`
    max-width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 4px solid #262;
    border-bottom: 4px solid #231;
    background: #242;
    border-radius: 5px;
    box-shadow: 4px 4px 12px 8px #0004;
    cursor: default;

    :hover{
        border-top: 4px solid #262;
        border-bottom: 4px solid #262;
        background: #284;
    }
`

export const InputLabel = styled.label`
    width: 80%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #465;
`

export const DeliveryAreaWrapper = styled.div`
    width: 60%;
    height: 60%;
    background: transparent;
    overflow: hidden;
    border-radius: 6px;
    
`

export const LabelWrapper = styled.div<QuestionTypes>`
    height: 1em;
    color: ${({ isPhysical }) => isPhysical ? `#fff` : `#fff3`};
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const InputElement = styled.input`
    width: 80%;
    height: 2rem;
    padding: 1em;
    font-size: 0.9em;
    color: #4a4;
    background: #1a0d19;
    border: none;
    border-radius: 8px;
    border: 1px solid #444;
    outline: none;
    text-align: center;

    ::placeholder {
        color: #fff4;
        opacity: 1;
    };

    :focus {
        background: #000;
        color: #fff;
    };

    :disabled {
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
