import { SHA256 } from 'crypto-js'
import { useEffect, useState } from 'react'
import { createKeyPair, getPublicKey, signHash } from '../../../utils/manageKeys'
import * as F from 'react-icons/fa'
import * as M from 'react-icons/md'
import * as S from './NewBusinessStyled'
import Questions from './Questions'
import { objectToOpCode, opCodeToObject } from '../../../utils/opCode'

export default function NewBusiness
({
    setIsLoading,
    setSignature,
    businessName,
    businessService,
    businessCountry,
    businessState,
    businessCity,
    businessNeighbourhood,
    businessStreet,
    businessNumber,
    businessZipCode,
    handleBusinessName,
    setBusinessName,
    setBusinessService,
    handleBusinessCountry,
    handleBusinessState,
    handleBusinessCity,
    handleBusinessNeighbourhood,
    handleBusinessStreet,
    handleBusinessNumber,
    handleBusinessZipCode,
    isChromium,
    fingerprint,
    toAddress,
    handleToAddress,
    amount,
    handleAmount,
    signature,
    privateKey,
    handlePrivateKey,
    closeContractForm
    }: any) {


    const [step, setStep] = useState(0)
    const [isPhysical, setIsPhysical] = useState<boolean>(false)
    const [noPrev, setNoPrev] = useState(step <= 0)
    const [noNext, setNoNext] = useState(false)


    const questionParam = {
        businessName,
        businessService,
        businessCountry,
        businessState,
        businessCity,
        businessNeighbourhood,
        businessStreet,
        businessZipCode,
        businessNumber,
        handleBusinessName,
        chooseService,
        handleBusinessCountry,
        handleBusinessState,
        handleBusinessCity,
        handleBusinessNeighbourhood,
        handleBusinessStreet,
        handleBusinessZipCode,
        handleBusinessNumber,
        step,
        isChromium,
        fingerprint,
        toAddress,
        handleToAddress,
        amount,
        handleAmount,
        signature,
        privateKey,
        handlePrivateKey
    }

    function nextStep(e: any) {

        e.preventDefault()

        if(step + 1 === 1){
            
            if(businessService){
                setNoNext(false)
            }else{
                setNoNext(true)
            }
            setNoPrev(false)
            setStep(step + 1)

        }else if(step + 1 === 2){
            setStep(step+1)
        }else if(step + 1 === 3 || step + 1 === 3.5){
          
            if(businessService==='delivery'){
                
                setStep(step+0.5)

            }else{

                setStep(step+1)
            }
        }
    }

    function previousStep(e: any) {
        e.preventDefault()

        if(step-1 <= 0){
            setNoPrev(true)
            setStep(step - 1)
        }
        if(step%1===0.5){
            setStep(step - 0.5)
        }else{
            setStep(step - 1)
        }
    }

    function chooseService(e: any, service: string){
        e.preventDefault()

        setBusinessService(service)
        setNoNext(false)
    }

    async function createBusines(e: any){
        
        e.preventDefault()

        setIsLoading(true)       

        if(businessName === ""){
            setBusinessName("Anonymous")
        }

        // curl -X POST -d '{"type":"new-business","data":{"header":{"owner":"04817b5ba328e3e2c7d50c4726572b0fd8a518f08cae361d05f07e83d4b584eb10ecd010be823eab085daed129f4aab02800ba85e377a2d6ab753bc4e1ff3652cb","toAddress":"","amount":0.0007,"signature":"3045022100f237d0f68ace2895e5c382d3141c24045876ad433c1d95d7c8695a5e832643e202204312c00c9ad641bf7df9726ffedf3883c7f01cc690ea8b75c6cbc34876243988"},"payload":{"hash":"efc9e923fc16cda2446214dc00fda19093e11913a2ec49aef92f56dad6c81396","data":"TRÍADE"}}}' -H 'Content-Type':'application/json' localhost:3001/api/chain


        /* 
        {
            "type":"new-business",
            "data":{
                "header":{
                    "owner":"04817b5ba328e3e2c7d50c4726572b0fd8a518f08cae361d05f07e83d4b584eb10ecd010be823eab085daed129f4aab02800ba85e377a2d6ab753bc4e1ff3652cb",
                    "toAddress":"",
                    "amount":0.0007,
                    "signature":"3045022100f237d0f68ace2895e5c382d3141c24045876ad433c1d95d7c8695a5e832643e202204312c00c9ad641bf7df9726ffedf3883c7f01cc690ea8b75c6cbc34876243988"
                },
                "payload":{
                    "hash":"efc9e923fc16cda2446214dc00fda19093e11913a2ec49aef92f56dad6c81396",
                    "data":"TRÍADE"
                }
            }
        }
        */
        
        const businessPair = createKeyPair()

        alert(`Write down your Business's Private key\n\nIt is a new Private Key needed to menage this contract\n\n${businessPair.privateKey}`)

        const business: any = {
            owner: getPublicKey(privateKey),
            businessWallet: businessPair.publicKey,
            businessName: businessName,
        }
        if(!isPhysical){
            business.businessAddress = {
                country: businessCountry,
                state: businessState,
                city: businessCity,
                neighbourhood: businessNeighbourhood,
                street: businessStreet,
                zipCode: businessZipCode,
                number: businessNumber
            }
        }

        const opCode = objectToOpCode(business, "TAD-20")

        const payload = {

            const header = {
                owner: business.owner,
                toAddress: null,
                amount: amount,
                signature,
            }
            const payload = {
                opCode,
                hash: ''
            }
            
        }

        if(isPhysical){
            
            business.hash = SHA256(`${business.owner}${business.businessWallet}${business.businessName}${business.businessCountry}${business.businessState}${business.businessCity}${business.businessNeighbourhood}${business.businessStreet}${business.businessZipCode}${business.businessNumber}`).toString()
        }else{

            business.hash = SHA256(`${business.owner}${business.businessWallet}${business.businessName}`).toString()
        }
        

        if(privateKey){

            try {
                setSignature(signHash(business.hash, privateKey))
                const header = {
                    owner: business.owner,
                    toAddress: business.toAddress,
                    amount: business.amount,
                    signature: business.signature,
                }
                
            } catch (error) {
                alert(`Could not Sign this Contract`)
                setIsLoading(false)
                return
            }

        }else{
            alert('Put your Private Key to sign this Contract')
            setIsLoading(false)
            return
        }
        

        const contract: any = {
            header: {
                owner: getPublicKey(privateKey),
                toAddress,
                amount,
                signature
            },
            payload:{
                hash:business.hash,
                data:opCode
            },
        }
        alert(contract.payload.hash)

        try {
            await fetch(`https://triade-api.vercel.app/api/chain`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    type: "new-business",
                    data: contract
                })
            }).then(res=>res.json()).then(res=>{
                // 13b3dfb8ef9b985229dce5f6a16ce4bcaee5fdccba6723ab5b082573ca4939aa
                alert(JSON.stringify(res))
            })
            
        } catch (error) {
            setIsLoading(false)
            
        }finally{

            setIsLoading(false)
        }
        
        
    }

    useEffect(() => {
        document.addEventListener("keypress", (e) => {
            if (e.key === 'Enter' && step < 4) {
                setStep(step + 1)
            }
        })
    }, [])
    
    function getPosition(e: any) {

        e.preventDefault()

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
        } function getPosition(position: any) {
            alert(position.coords.latitude);
            alert(position.coords.longitude);
        }
    }

    useEffect(()=>{
        setNoPrev(true)
    },[])
   
    return (
        <S.Wrapper id={'form'}>
            <S.FloatWrapper isChromium={isChromium}>
                <S.FloatTopWrapper>
                    {`$new_Businnes(${businessName?businessName.replaceAll(" ", "_"):`Anonymous`});`}
                </S.FloatTopWrapper>

                <S.FloatMidWrapper>
                    <Questions {...questionParam}/>
                </S.FloatMidWrapper>

                <S.FloatBottomWrapper>
                    <S.NavFormBtn onClick={previousStep} disabled={noPrev}>
                        <M.MdChevronLeft/>
                    </S.NavFormBtn>

                    <S.NavFormBtn onClick={step < 3?nextStep:createBusines} disabled={noNext}>
                        {step < 3?
                        <M.MdChevronRight/>
                        :
                        <M.MdCheck/>}
                    </S.NavFormBtn>
                </S.FloatBottomWrapper>
            </S.FloatWrapper>
        </S.Wrapper>
    )
}