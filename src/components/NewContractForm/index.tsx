import {SHA256} from 'crypto-js'
import * as M from 'react-icons/md'
import * as S from './NewContractFormStyled'
import { useState } from 'react'
import NewBusiness from './NewBusiness'

export type ContractTypes = {
    businessService: string;
}


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
    
    const [ businessName, setBusinessName ] = useState<string>('')
    const [ businessService, setBusinessService ] = useState<string>('')
    const [ businessCountry, setBusinessCountry ] = useState<string>('')
    const [ businessState, setBusinessState ] = useState<string>('')
    const [ businessCity, setBusinessCity ] = useState<string>('')
    const [ businessNeighbourhood, setBusinessNeighbourhood ] = useState<string>('')
    const [ businessStreet, setBusinessStreet ] = useState<string>('')
    const [ businessNumber, setBusinessNumber ] = useState<number>(0)
    const [ businessZipCode, setBusinessZipCode ] = useState<number>(0)

    const [ signature, setSignature ] = useState<string>('')
    const [ fingerprint, setFingerprint ] = useState<string>('')

    const [ business, setBusiness ] = useState<any>({})
    

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
        setBusinessName(e.target.value)
    }
    
    function handleBusinessCountry (e:any){
        setBusinessCountry(e.target.value)
    }
    
    function handleBusinessState (e:any){
        setBusinessState(e.target.value)
    }
    
    function handleBusinessCity (e:any){
        setBusinessCity(e.target.value)
    }
    
    function handleBusinessNeighbourhood (e:any){
        setBusinessNeighbourhood(e.target.value)
    }
    
    function handleBusinessStreet (e:any){
        setBusinessStreet(e.target.value)
    }
    
    function handleBusinessNumber (e:any){
        setBusinessNumber(e.target.value)
    }
    
    function handleBusinessZipCode (e:any){
        setBusinessZipCode(e.target.value)
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
        businessName,
        businessService,
        businessCountry,
        businessState,
        businessCity,
        businessNeighbourhood,
        businessStreet,
        businessNumber,
        businessZipCode,
        isChromium,
        fingerprint,
        toAddress,
        amount,
        signature,
        privateKey,
        handleBusinessName,
        setBusinessService,
        handleBusinessCountry,
        handleBusinessState,
        handleBusinessCity,
        handleBusinessNeighbourhood,
        handleBusinessStreet,
        handleBusinessNumber,
        handleBusinessZipCode,
        handlePrivateKey,
        handleToAddress,
        handleAmount,
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