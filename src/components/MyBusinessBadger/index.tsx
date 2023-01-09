import * as F from "react-icons/fa"
import Image from "next/image"
import { useEffect, useState } from "react"
import * as S from "./MyBusinessBadgerStyled"
import TwirlScreenStyled from "./TwirlScreen"

import logo from "../../../public/triade.png"
import { getPublicKey } from "../../utils/manageKeys"

export default function MyBusinessBadger({privateKey, selectedBusiness, closeBadger}: any){
    alert(JSON.stringify(selectedBusiness))
    const [ products, setProducts ] = useState<Array<any>>(selectedBusiness.data.businessProducts)

/*  {
        "header":{
            "timestamp":1672786400808,
            "owner":"04aac0d1db5b7e91b8786a1225e0e15d156c327d4bfa9cf8038ebad231b3478dbb539a5710219381c05fb8c9bfdf1788ba25bdd7bbe4d3cc3465ec593c7b04e82e",
            "toAddress":"00000000",
            "amount":0,
            "hash":"0c8fce4e2b542d364256372e59f5ca04e09c580d0b5cbf1c1e42f2375debe475",
            "signature":"304502204cdeaf1d2e37a18276ed878a7053782bddb446e0c661bf984510b468f3cd565702210091903e22949228bbcdd0d4d3d85f98ad4b5220336904c118d7cfcf2a0a06ec86"
        },
        "data":{
            "businessRating":5,
            "businessWallet":"04561b0fff34922ee2c56b28b629c4a6527167ae182a6cd909dd65a0a16856edddc879cdc00d04aa67a67a2e9a4797e107f0ca8dfdd71fcec1b9c1b373c709b912",
            "businessName":"",
            "businessService":"commerce",
            "businessProducts":null,
            "businessImage":"",
            "dataHash":"15028896502e7307b4de5ee00c280612327b2b36f3cd802cb03ac36540b133fb"
        }
        
        token.data.dataHash = SHA256(`${token.data.businessRating}${token.data.businessWallet}${token.data.businessName}${token.data.businessImage}${token.data.businessService}${token.data.businessProducts?JSON.stringify(token.data.businessProducts):null}${isPhysical?token.data.addressHash:null}`).toString()
            
        token.header.hash = SHA256(`${token.header.timestamp}${token.header.owner}${token.header.toAddress}${token.header.amount}${token.data.dataHash}`).toString()
            
    }
*/
    useEffect(()=>{
    },[])

    function addProduct(){
        const p = products
        p.push({
            name: "Name",
            price: "Name",
        })
        setProducts(p)
    }

    return (
        <S.Wrapper>
            <S.FloatWrapper>
                <S.TopWrapper>
                    <S.LogoWrapper>
                        {selectedBusiness.data.businessImage && <Image
                        src={selectedBusiness.data.businessImage}
                        alt="Business logo"
                        width={100}
                        height={100}
                        style={{overflow:"hidden", objectFit: "contain", background: "#fff"}}
                        />
                        || <Image
                        src={logo}
                        alt="Business logo"
                        width={100}
                        height={100}
                        style={{opacity: "0.5", overflow:"hidden", objectFit: "contain", background: "#fff"}}
                        />
                        }
                    </S.LogoWrapper>
                    
                    <S.CommercialInfoWrapper>
                        {selectedBusiness && <>
                            <S.InfoLineWrapper>
                                <strong style={{textDecoration: "underline"}}>
                                    {selectedBusiness.data.businessName}
                                </strong>
                                <strong>
                                    {selectedBusiness.data.businessRating}
                                </strong>
                            </S.InfoLineWrapper>

                            <S.InfoLineWrapper>
                                {selectedBusiness.header.owner===getPublicKey(privateKey)&&<F.FaPlus/>}
                                {products.length>0 && <div>{products.length}</div>}
                            </S.InfoLineWrapper>
                            
                            <S.InfoLineWrapper>
                                {selectedBusiness.data.businessWallet}
                            </S.InfoLineWrapper>
                        </>
                        ||
                        <>
                        {`No info`}
                        </>}
                    </S.CommercialInfoWrapper>
                </S.TopWrapper>

                <S.BusinessWrapper>
                {selectedBusiness.data.businessProducts.length>0 && <S.SpinContainer>
                        <TwirlScreenStyled products={selectedBusiness.data.businessProducts}/>
                    </S.SpinContainer>}
                    {JSON.stringify(selectedBusiness?selectedBusiness:"nooo")}
                </S.BusinessWrapper>
            </S.FloatWrapper>
            
            <S.CloseBtn onClick={closeBadger}>X</S.CloseBtn>
            {selectedBusiness.header.owner===getPublicKey(privateKey) && <S.AddProductBtn onClick={addProduct}>+</S.AddProductBtn>}
            <S.CloseBtn onClick={closeBadger}>X</S.CloseBtn>
        </S.Wrapper>
    )
}