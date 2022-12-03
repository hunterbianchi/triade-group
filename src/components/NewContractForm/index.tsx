import {SHA256} from 'crypto-js'
import * as M from 'react-icons/md'
import * as S from './NewContractFormStyled'
import { useState } from 'react'
import NewBusiness from './NewBusiness'


export default function NewContractForm({
    isChromium,
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
    closeContractForm}:any){

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
        isChromium,
        fingerprint,
        toAddress,
        handleToAddress,
        amount,
        handleAmount,
        businessName,
        handleBusinessName,
        signature,
        privateKey,
        handlePrivateKey,
        closeContractForm
    }
    return (
        <S.Wrapper>
            <S.TriadeOptionsWrapper>    
                <S.ContractGroupBtn onClick={openGroupsOptions}>
                    {`TRÍADE ${contractGroup.name}`}
                </S.ContractGroupBtn>

                <S.ContractTypeBtn onClick={openTypesOptions} disabled={isDisabledTypeBtn}>
                    {`TRÍADE ${contractType.name}`}
                </S.ContractTypeBtn>

                <S.CloseFormBtn onClick={closeContractForm}>
                    <M.MdClose/>
                </S.CloseFormBtn>

            </S.TriadeOptionsWrapper>

            <S.ContractContainer>
                
                {contractType.name !== "Business" && <S.ContractForm>
                    {`You cannot create a new ${contractType.name}`}
                </S.ContractForm>}

                {contractType.name === "Business" && <S.ContractForm>
                    <NewBusiness {...newBusinessParam}/>
                </S.ContractForm>}

            </S.ContractContainer>

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