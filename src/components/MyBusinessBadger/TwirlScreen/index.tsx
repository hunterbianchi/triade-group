import { useState } from "react"
import * as S from "./TwirlScreenStyled"

export default function TwirlScreenStyled({products}: any){

    const [productIndex, setProductIndex ] = useState(0)
    const [product, setProduct ] = useState(products[productIndex])

    function nextProduct(){
        if(productIndex + 1 <= products.length - 1){
            setProductIndex(current=>current+1)
            setProduct(products[productIndex])
        } else {
            setProductIndex(0)
            setProduct(products[productIndex])
        }
        alert(`${productIndex} - ${products.length - 1}`)

    }

    function previousProduct(){
        if(productIndex > 0){
            setProductIndex(current=>current - 1)
            setProduct(products[productIndex])
        }else{
            setProduct(products[productIndex])
        }
        alert(`${productIndex} - ${products.length - 1}`)

    }

    return (
        <S.Wrapper>
            {product}
            <S.NavWrapper>
                <S.PreviousProductWrapper onClick={previousProduct}></S.PreviousProductWrapper>
                <S.NextProductWrapper onClick={nextProduct}></S.NextProductWrapper>
            </S.NavWrapper>
        </S.Wrapper>
    )
}