import {SHA256} from 'crypto-js'
import crypto from 'crypto'
import * as S from './NewContractFormStyled'
import { useState } from 'react'
import NewBusiness from './NewBusiness'


export default function NewContractForm({
setShowGroupOptions,
setContractGroup,
setContractType,
setIsDisabledTypeBtn,
setShowTypeOptions,
contractGroup,
allGroups,
contractType,
showGroupOptions,
showTypeOptions,
isDisabledTypeBtn,
closeContractForm}:any)
{

    const [ privateKey, setPrivateKey ] = useState<string>('')
    const [ fromAddress, setFromAddress ] = useState<string>('')
    const [ toAddress, setToAddress ] = useState<string>('')
    const [ amount, setAmount ] = useState<number>(0)
    const [ businessName, setbusinessName ] = useState<string>('')
    const [ signature, setSignature ] = useState<string>('')
    const [ fingerprint, setFingerprint ] = useState<string>('')
    

    function handlePrivateKey (e:any){
        setPrivateKey(e.target.value)
        setFingerprint(SHA256(privateKey).toString())
    }
    
    function handleToAddress (e:any){
        setToAddress(e.target.value)
    }
    
    function handleFromAddress (e:any){
        setFromAddress(e.target.value)
    }

    function handleAmount (e:any){
        setAmount(e.target.value)
    }

    function handleBusinessName (e:any){
        setbusinessName(e.target.value)
    }
    

    function openGroupsOptions(e: any){
        e.preventDefault()
        setShowGroupOptions(true)
    }

    function chooseGroupName(e: any, group: any){
        e.preventDefault()
        setContractGroup(group)
        setContractType({name:"[Type]"})
        setIsDisabledTypeBtn(false)
        setShowGroupOptions(false)
    }

    function openTypesOptions(e: any){
        e.preventDefault()
        setShowTypeOptions(true)
    }

    function chooseTypeName(e: any, type: any){
        e.preventDefault()
        setContractType(type)
        setShowTypeOptions(false)
    }

    const newBusinessParam = {
        fingerprint,
        toAddress,
        handleToAddress,
        amount,
        handleAmount,
        businessName,
        handleBusinessName,
        signature,
        privateKey,
        handlePrivateKey
    }
    return (
        <S.Wrapper>
            <S.TriadeOptionsWrapper>    
                <S.ContractTypeBtn onClick={openGroupsOptions}>
                    {`TRÍADE ${contractGroup.name}`}
                </S.ContractTypeBtn>
                <S.ContractTypeBtn onClick={openTypesOptions} disabled={isDisabledTypeBtn}>
                    {`TRÍADE ${contractType.name}`}
                </S.ContractTypeBtn>
            </S.TriadeOptionsWrapper>
            
            {<S.ContractForm>
                <NewBusiness {...newBusinessParam}/>
            </S.ContractForm>}

            <S.TriadeOptionsWrapper>    
                <S.ContractTypeBtn onClick={closeContractForm}>
                    {`X`}
                </S.ContractTypeBtn>
                <S.ContractTypeBtn disabled={true}>
                    {`>`}
                </S.ContractTypeBtn>
            </S.TriadeOptionsWrapper>

            {showGroupOptions && <S.FloatOptionsWrapper>
                <S.FloatOptions>
                    {allGroups.map((group:any)=>{
                        return(
                            <S.OptionBtn onClick={e=>chooseGroupName(e, group)}>
                                {group.name}
                            </S.OptionBtn>
                        )
                    })}
                </S.FloatOptions>
            </S.FloatOptionsWrapper>}
            
            {showTypeOptions && <S.FloatOptionsWrapper>
                <S.FloatOptions>
                    {contractGroup.type.map((type:any)=>{
                        return(
                            <S.OptionBtn onClick={e=>chooseTypeName(e, type)}>
                                {type.name}
                            </S.OptionBtn>
                        )
                    })}
                </S.FloatOptions>
            </S.FloatOptionsWrapper>}
        </S.Wrapper>
    )
}