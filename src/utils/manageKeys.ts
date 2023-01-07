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

export function slicePublicKey(publicKey: string){
    if(publicKey.length===130){

        const sliced = `${publicKey.slice(0, 10)} - ${publicKey.slice(10, 20)} - ${publicKey.slice(20, 30)} - ${publicKey.slice(30, 40)} - ${publicKey.slice(40, 50)} - ${publicKey.slice(50, 60)} - ${publicKey.slice(60, 70)} - ${publicKey.slice(70, 80)} - ${publicKey.slice(80, 90)} - ${publicKey.slice(90, 100)} - ${publicKey.slice(100, 110)} - ${publicKey.slice(110, 120)} - ${publicKey.slice(120, 130)}`

        return sliced
    }else{

        return publicKey
    }
}
export function splitPrivateKey(privateKey: string){
    return privateKey
}