const EC = require('elliptic').ec

const ec = new EC('secp256k1')

export function createKeyPair(){

    const key = ec.genKeyPair()

    return {
        privateKey: key.getPrivate('hex'),
        publicKey: key.getPublic('hex')
    }
}

export function getPublicKey(privateKey: string){

    const key = ec.genKeyPair()

    if(privateKey){
        return ec.keyFromPrivate(privateKey).getPublic('hex')
    }else{
        // return ec.keyFromPrivate(key.getPrivate('hex')).getPublic('hex')
        return key.getPrivate('hex')
    }
}

export function signHash( contractHash:string, privateKey:string ){

    const privateSign = ec.keyFromPrivate(privateKey)

    const sig = privateSign.sign(contractHash, 'base64')

    const signature = sig.toDER('hex')
    console.log(`Assinatura no formato DER: ${signature}`)

    return signature
}


export function verifySignature(publicKey:string, hash:string, signature:string){
        
    return ec.keyFromPublic(publicKey, 'hex').verify(hash, signature)

}
