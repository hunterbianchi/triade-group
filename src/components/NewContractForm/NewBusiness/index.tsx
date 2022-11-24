import * as S from './NewBusinessStyled'

export default function NewBusiness ({
    fingerprint,
    toAddress,
    handleToAddress,
    amount,
    handleAmount,
    businessName,
    handleBusinessName,
    signature,
    privateKey,
    handlePrivateKey }:any) {
    return (
        <S.Wrapper>
            <S.TriadeOptionsWrapper>
                <input value={privateKey} type={"password"} onChange={handlePrivateKey} />
            </S.TriadeOptionsWrapper>
            <div style={{color: '#fff', fontSize: '10px'}}>
                {`Fingerprint: ${fingerprint}`}
            </div>
            <div style={{height: '100%', color: '#fff', fontSize: '10px'}}>
                <input value={toAddress} type={"text"} onChange={handleToAddress} />
            </div>
            <div style={{height: '100%', color: '#fff', fontSize: '10px'}}>
                <input value={amount} type={"text"} onChange={handleAmount} />
            </div>
            <div style={{height: '100%', color: '#fff', fontSize: '10px'}}>
                <input value={businessName} type={"text"} onChange={handleBusinessName} />
            </div>
            <div style={{height: '100%', color: '#fff', fontSize: '10px'}}>
                {signature}
            </div>
        </S.Wrapper>
    )
}